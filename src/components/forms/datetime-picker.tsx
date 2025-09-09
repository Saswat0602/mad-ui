import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Clock, Calendar, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../core/select';

export interface DateTimePickerProps {
  mode?: 'date' | 'time' | 'both';
  timeFormat?: '12' | '24';
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  mode = 'both',
  timeFormat = '12',
  value = null,
  onChange = () => {},
  placeholder = 'Select date & time',
  disabled = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : new Date());
  const [viewDate, setViewDate] = useState(new Date());
  const [showYearModal, setShowYearModal] = useState(false);
  const [showMonthModal, setShowMonthModal] = useState(false);
  const [activeTab, setActiveTab] = useState(mode === 'both' ? 'date' : mode);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowYearModal(false);
        setShowMonthModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setShowYearModal(false);
        setShowMonthModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const formatDisplayValue = () => {
    if (!value) return placeholder;
    
    const date = new Date(value);
    let result = '';
    
    if (mode === 'date' || mode === 'both') {
      result += date.toLocaleDateString();
    }
    
    if (mode === 'time' || mode === 'both') {
      if (result) result += ' ';
      const timeOptions = { 
        hour12: timeFormat === '12',
        hour: 'numeric' as const,
        minute: '2-digit' as const
      };
      result += date.toLocaleTimeString([], timeOptions);
    }
    
    return result;
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(viewDate);
    const firstDay = getFirstDayOfMonth(viewDate);
    const days: Array<{
      day: number;
      isCurrentMonth: boolean;
      isPrevMonth?: boolean;
      isNextMonth?: boolean;
      date: Date;
    }> = [];

    // Previous month's trailing days
    const prevMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 0);
    const prevMonthDays = prevMonth.getDate();
    
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isPrevMonth: true,
        date: new Date(prevMonth.getFullYear(), prevMonth.getMonth(), prevMonthDays - i)
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        date: new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
      });
    }

    // Next month's leading days
    const remainingDays = 42 - days.length; // 6 rows × 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isNextMonth: true,
        date: new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, day)
      });
    }

    return days;
  };

  const handleDateSelect = (date: Date) => {
    const newDate = new Date(selectedDate);
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth());
    newDate.setDate(date.getDate());
    
    setSelectedDate(newDate);
    onChange(newDate);
    
    if (mode === 'date') {
      setIsOpen(false);
    } else if (mode === 'both') {
      setActiveTab('time');
    }
  };

  const handleTimeChange = (type: string, value: string) => {
    const newDate = new Date(selectedDate);
    
    if (type === 'hour') {
      if (timeFormat === '12') {
        const currentHours = newDate.getHours();
        const isPM = currentHours >= 12;
        let newHours = parseInt(value);
        
        if (newHours === 12) {
          newHours = isPM ? 12 : 0;
        } else {
          newHours = isPM ? newHours + 12 : newHours;
        }
        
        newDate.setHours(newHours);
      } else {
        newDate.setHours(parseInt(value));
      }
    } else if (type === 'minute') {
      newDate.setMinutes(parseInt(value));
    } else if (type === 'ampm') {
      const currentHours = newDate.getHours();
      if (value === 'AM' && currentHours >= 12) {
        newDate.setHours(currentHours - 12);
      } else if (value === 'PM' && currentHours < 12) {
        newDate.setHours(currentHours + 12);
      }
    }
    
    setSelectedDate(newDate);
    onChange(newDate);
  };

  const navigateMonth = (direction: number) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setViewDate(newDate);
  };

  const navigateYear = (direction: number) => {
    const newDate = new Date(viewDate);
    newDate.setFullYear(newDate.getFullYear() + direction);
    setViewDate(newDate);
  };

  const generateYears = () => {
    const currentYear = viewDate.getFullYear();
    const years = [];
    for (let i = currentYear - 50; i <= currentYear + 50; i++) {
      years.push(i);
    }
    return years;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const getHourDisplay = () => {
    if (timeFormat === '12') {
      const hour = selectedDate.getHours();
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    }
    return selectedDate.getHours();
  };

  const getAMPM = () => {
    return selectedDate.getHours() >= 12 ? 'PM' : 'AM';
  };

  const renderDatePicker = () => (
    <div className="p-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowMonthModal(true)}
            className="font-semibold text-gray-800 hover:bg-gray-100 px-2 py-1 rounded transition-colors"
          >
            {months[viewDate.getMonth()]}
          </button>
          <button
            onClick={() => setShowYearModal(true)}
            className="font-semibold text-gray-800 hover:bg-gray-100 px-2 py-1 rounded transition-colors"
          >
            {viewDate.getFullYear()}
          </button>
        </div>
        
        <button
          onClick={() => navigateMonth(1)}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Week Days Header */}
      <div className="grid grid-cols-7 mb-2">
        {weekDays.map(day => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {generateCalendarDays().map((dayObj, index) => (
          <button
            key={index}
            onClick={() => {
              if (dayObj.isPrevMonth) {
                navigateMonth(-1);
              } else if (dayObj.isNextMonth) {
                navigateMonth(1);
              }
              handleDateSelect(dayObj.date);
            }}
            className={`
              p-2 text-sm rounded-lg transition-all duration-200 hover:bg-blue-50
              ${!dayObj.isCurrentMonth ? 'text-gray-300 hover:text-gray-500' : 'text-gray-700'}
              ${isSelected(dayObj.date) ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
              ${isToday(dayObj.date) && !isSelected(dayObj.date) ? 'bg-blue-100 text-blue-800 font-semibold' : ''}
            `}
          >
            {dayObj.day}
          </button>
        ))}
      </div>
    </div>
  );

  const renderTimePicker = () => (
    <div className="p-4">
      <div className="text-center mb-4">
        <div className="text-2xl font-bold text-gray-800 mb-2">
          {String(getHourDisplay()).padStart(2, '0')}:
          {String(selectedDate.getMinutes()).padStart(2, '0')}
          {timeFormat === '12' && (
            <span className="ml-2 text-lg">{getAMPM()}</span>
          )}
        </div>
      </div>

      <div className="flex space-x-2">
        {/* Hour Selection */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Hour</label>
          <Select
            value={String(getHourDisplay())}
            onValueChange={(value) => handleTimeChange('hour', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Hour" />
            </SelectTrigger>
            <SelectContent className="max-h-48 overflow-y-auto">
              {Array.from({ length: timeFormat === '12' ? 12 : 24 }, (_, i) => {
                const hour = timeFormat === '12' ? (i === 0 ? 12 : i) : i;
                return (
                  <SelectItem key={i} value={String(hour)}>
                    {String(hour).padStart(2, '0')}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        {/* Minute Selection */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Minute</label>
          <Select
            value={String(selectedDate.getMinutes())}
            onValueChange={(value) => handleTimeChange('minute', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Minute" />
            </SelectTrigger>
            <SelectContent className="max-h-48 overflow-y-auto">
              {Array.from({ length: 60 }, (_, i) => (
                <SelectItem key={i} value={String(i)}>
                  {String(i).padStart(2, '0')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* AM/PM Selection for 12-hour format */}
        {timeFormat === '12' && (
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
            <Select
              value={getAMPM()}
              onValueChange={(value) => handleTimeChange('ampm', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="AM/PM" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AM">AM</SelectItem>
                <SelectItem value="PM">PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  );

  const renderYearModal = () => (
    <div className="absolute inset-0 bg-white rounded-lg shadow-lg border z-50">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold text-gray-800">Select Year</h3>
        <button
          onClick={() => setShowYearModal(false)}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={16} />
        </button>
      </div>
      <div className="p-4 h-64 overflow-y-auto">
        <div className="grid grid-cols-4 gap-2">
          {generateYears().map(year => (
            <button
              key={year}
              onClick={() => {
                const newDate = new Date(viewDate);
                newDate.setFullYear(year);
                setViewDate(newDate);
                setShowYearModal(false);
              }}
              className={`
                p-2 text-sm rounded-lg transition-colors
                ${year === viewDate.getFullYear() 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-100 text-gray-700'
                }
              `}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMonthModal = () => (
    <div className="absolute inset-0 bg-white rounded-lg shadow-lg border z-50">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold text-gray-800">Select Month</h3>
        <button
          onClick={() => setShowMonthModal(false)}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={16} />
        </button>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2">
          {months.map((month, index) => (
            <button
              key={month}
              onClick={() => {
                const newDate = new Date(viewDate);
                newDate.setMonth(index);
                setViewDate(newDate);
                setShowMonthModal(false);
              }}
              className={`
                p-2 text-sm rounded-lg transition-colors
                ${index === viewDate.getMonth()
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100 text-gray-700'
                }
              `}
            >
              {month}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Input Trigger */}
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full p-3 text-left border border-gray-300 rounded-lg bg-white
          transition-all duration-200 flex items-center justify-between
          ${disabled 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          }
          ${isOpen ? 'border-blue-500 ring-2 ring-blue-200' : ''}
        `}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-500'}>
          {formatDisplayValue()}
        </span>
        <div className="flex items-center space-x-1 text-gray-400">
          {(mode === 'date' || mode === 'both') && <Calendar size={16} />}
          {(mode === 'time' || mode === 'both') && <Clock size={16} />}
        </div>
      </button>

      {/* Full-screen Modal using Portal */}
      {isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-white rounded-lg shadow-xl border border-gray-200 z-50 min-w-[320px] max-w-sm w-full">
            {/* Tab Navigation for both mode */}
            {mode === 'both' && (
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('date')}
                  className={`
                    flex-1 p-3 text-sm font-medium transition-colors flex items-center justify-center space-x-2
                    ${activeTab === 'date'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }
                  `}
                >
                  <Calendar size={16} />
                  <span>Date</span>
                </button>
                <button
                  onClick={() => setActiveTab('time')}
                  className={`
                    flex-1 p-3 text-sm font-medium transition-colors flex items-center justify-center space-x-2
                    ${activeTab === 'time'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }
                  `}
                >
                  <Clock size={16} />
                  <span>Time</span>
                </button>
              </div>
            )}

            {/* Content */}
            <div className="relative">
              {(mode === 'date' || (mode === 'both' && activeTab === 'date')) && renderDatePicker()}
              {(mode === 'time' || (mode === 'both' && activeTab === 'time')) && renderTimePicker()}

              {/* Modals */}
              {showYearModal && renderYearModal()}
              {showMonthModal && renderMonthModal()}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2 p-3 border-t border-gray-200">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowYearModal(false);
                  setShowMonthModal(false);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowYearModal(false);
                  setShowMonthModal(false);
                }}
                className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

DateTimePicker.displayName = "DateTimePicker";

export { DateTimePicker };
export default DateTimePicker;