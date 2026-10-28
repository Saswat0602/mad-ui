import React__default from 'react';

type DateTimeMode = 'date' | 'time' | 'both';
type TimeFormat = '12' | '24';
interface DateTimePickerProps {
    mode?: DateTimeMode;
    timeFormat?: TimeFormat;
    value?: Date | null;
    onChange?: (value: Date) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}
declare const DateTimePicker: React__default.FC<DateTimePickerProps>;

export { DateTimePicker };
