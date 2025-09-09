import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar, X } from 'lucide-react';

const DateTimePicker = ({
  mode = 'both', // 'date', 'time', 'both'
  timeFormat = '12', // '12' or '24'
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
  
  const containerRef = useRef(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowYearModal(false);
        setShowMonthModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        hour: 'numeric',
        minute: '2-digit'
      };
      result += date.toLocaleTimeString([], timeOptions);
    }
    
    return result;
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(viewDate);
    const firstDay = getFirstDayOfMonth(viewDate);
    const days = [];

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

  const handleDateSelect = (date) => {
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

  const handleTimeChange = (type, value) => {
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

  const navigateMonth = (direction) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setViewDate(newDate);
  };

  const navigateYear = (direction) => {
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

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
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

      <div className="space-y-4">
        {/* Hour Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Hour</label>
          <select
            value={getHourDisplay()}
            onChange={(e) => handleTimeChange('hour', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {Array.from({ length: timeFormat === '12' ? 12 : 24 }, (_, i) => {
              const hour = timeFormat === '12' ? (i === 0 ? 12 : i) : i;
              return (
                <option key={i} value={hour}>
                  {String(hour).padStart(2, '0')}
                </option>
              );
            })}
          </select>
        </div>

        {/* Minute Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Minute</label>
          <select
            value={selectedDate.getMinutes()}
            onChange={(e) => handleTimeChange('minute', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {Array.from({ length: 60 }, (_, i) => (
              <option key={i} value={i}>
                {String(i).padStart(2, '0')}
              </option>
            ))}
          </select>
        </div>

        {/* AM/PM Selection for 12-hour format */}
        {timeFormat === '12' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
            <select
              value={getAMPM()}
              onChange={(e) => handleTimeChange('ampm', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
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

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-40 min-w-[320px]">
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
      )}
    </div>
  );
};

// Demo Component
const App = () => {
  const [dateValue, setDateValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  const [bothValue, setBothValue] = useState(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Modern DateTime Picker
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A highly reusable, modern DateTime picker component with excellent UI/UX, 
            multiple modes, and full user control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Date Only */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Calendar className="mr-2 text-blue-600" size={20} />
              Date Only
            </h3>
            <DateTimePicker
              mode="date"
              value={dateValue}
              onChange={setDateValue}
              placeholder="Select a date"
            />
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Selected:</p>
              <p className="font-mono text-sm">
                {dateValue ? dateValue.toLocaleDateString() : 'None'}
              </p>
            </div>
          </div>

          {/* Time Only - 12 Hour */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Clock className="mr-2 text-green-600" size={20} />
              Time Only (12hr)
            </h3>
            <DateTimePicker
              mode="time"
              timeFormat="12"
              value={timeValue}
              onChange={setTimeValue}
              placeholder="Select time"
            />
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Selected:</p>
              <p className="font-mono text-sm">
                {timeValue ? timeValue.toLocaleTimeString([], {
                  hour12: true,
                  hour: 'numeric',
                  minute: '2-digit'
                }) : 'None'}
              </p>
            </div>
          </div>

          {/* Date & Time Combined */}
          <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Calendar className="mr-1 text-purple-600" size={20} />
              <Clock className="mr-2 text-purple-600" size={20} />
              Date & Time
            </h3>
            <DateTimePicker
              mode="both"
              timeFormat="12"
              value={bothValue}
              onChange={setBothValue}
              placeholder="Select date & time"
            />
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Selected:</p>
              <p className="font-mono text-sm">
                {bothValue ? `${bothValue.toLocaleDateString()} ${bothValue.toLocaleTimeString([], {
                  hour12: true,
                  hour: 'numeric',
                  minute: '2-digit'
                })}` : 'None'}
              </p>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Component Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎛️ Highly Configurable</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Three modes: date, time, or both</li>
                <li>• 12/24 hour time format support</li>
                <li>• Customizable placeholders</li>
                <li>• Disabled state support</li>
                <li>• Custom CSS classes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎨 Modern Design</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Clean, minimal interface</li>
                <li>• Smooth animations & transitions</li>
                <li>• Responsive design</li>
                <li>• Focus states & accessibility</li>
                <li>• Modern color scheme</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">📅 Smart Calendar</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Clickable month/year headers</li>
                <li>• Modal selectors for quick navigation</li>
                <li>• Today highlighting</li>
                <li>• Previous/next month navigation</li>
                <li>• Weekend styling</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">⚡ User Experience</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Click outside to close</li>
                <li>• Tab navigation between date/time</li>
                <li>• Intuitive time selection</li>
                <li>• Real-time value updates</li>
                <li>• Keyboard accessible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;