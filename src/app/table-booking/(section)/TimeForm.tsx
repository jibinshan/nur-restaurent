'use client'
import { useEffect, useState, type FC } from 'react'
import type { UseFormReturn } from 'react-hook-form';
import type { TableFormValues } from './Table-Validation';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from '@/lib/utils';
import { useRestaurant } from '@/context/RestaurantContext';
import type { DayHours, OpenHours } from '@/types/restaurant.type';

interface TimeFormProps {
    form: UseFormReturn<TableFormValues, undefined>;
    setpage: (value: number | ((page: number) => number)) => void;
}


const TimeForm: FC<TimeFormProps> = ({ form, setpage }) => {
    const { restaurant } = useRestaurant()
    const [from, setFrom] = useState<number>(0)
    const [to, setTo] = useState<number>(12)
    const dateValue = form.watch('date');
    function roundToHourIfNeeded(timeString: string) {
        const [hours, minutes] = timeString.split(':').map(Number);

        // Check if minutes are greater than 45, if so, round up
        if (minutes !== undefined && hours !== undefined) {
            if (minutes > 45) {

                return hours + 1;
            }
            return hours;
        }
    }

    useEffect(() => {
        const opening = restaurant?.openHours as Partial<OpenHours> ?? {};
        if (dateValue) {
            const day = format(new Date(dateValue), "EEEE").toLowerCase() as keyof OpenHours;
            if (day in opening) {
                const hours = opening[day] as Partial<DayHours> ?? {};

                const fromTime: string | undefined = hours.timings?.find((item) => item.from)?.from;
                const toTime: string | undefined = hours.timings?.find((item) => item.to)?.to;
                if (toTime) {
                    const to = roundToHourIfNeeded(toTime)
                    setTo(Number(to));
                }
                if (fromTime) {
                    const from = roundToHourIfNeeded(fromTime)
                    setFrom(Number(from));
                }

            }
        } else {
            console.log("Date is invalid or undefined");
        }
    }, [dateValue, restaurant?.openHours]);

    const generateTimeSlots = () => {
        const slots = [];

        if (from < to) {
            for (let hour = from; hour < to; hour++) {
                for (let minute = 0; minute < 60; minute += 15) {
                    // if (hour === 23 && minute > 0) break; // Stop after 10:00 PM
                    // const period = hour >= 12 ? "PM" : "AM";
                    // const displayHour = hour > 12 ? hour - 12 : hour;
                    // const time = `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`;
                    const time = `${hour}:${minute.toString().padStart(2, "0")}`;
                    slots.push(time);
                }
            }
        } else {
            for (let hour = from; hour < 24; hour++) {
                for (let minute = 0; minute < 60; minute += 15) {
                    const time = `${hour}:${minute.toString().padStart(2, "0")}`;
                    slots.push(time);
                }
            }
            for (let hour = 0; hour < to; hour++) {
                for (let minute = 0; minute < 60; minute += 15) {
                    const time = `${hour}:${minute.toString().padStart(2, "0")}`;
                    slots.push(time);
                }
            }
        }
        return slots;
    };

    const guestNumbers = Array.from({ length: 15 }, (_, i) => i + 1);

    return (
        <div className='w-full flex flex-col gap-3 items-center justify-center'>
            <p className='text-3xl font-semibold'>Request a reservation</p>
            <p>Select your details and we`ll try get the best seats for you</p>
            <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-12 border-b-[2px] border-b-primary">
                <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>No of Guests</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger className="h-12 border-muted bg-transparent">
                                        <SelectValue placeholder="Select guests" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="max-h-[300px]">
                                    {guestNumbers.map((num) => (
                                        <SelectItem key={num} value={num.toString()}>
                                            {num} {num === 1 ? "Guest" : "Guests"}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="">
                            <FormLabel>Date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={`h-12 w-full justify-start border-muted bg-transparent text-left font-normal`}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        initialFocus
                                        fromDate={
                                            new Date(new Date().setDate(new Date().getDate() + 1))
                                        }
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Time</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger className="h-12 border-muted bg-transparent">
                                        <SelectValue placeholder={form.watch('time') ? form.watch('time') : "Select time"} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="max-h-[300px]">
                                    {generateTimeSlots().map((time) => (
                                        <SelectItem key={time} value={time}>
                                            {time}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className='w-full py-12 flex flex-col gap-4'>
                <p>Choose an available time slot:</p>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
                    {generateTimeSlots().slice(0, 15).map((time) => (
                        <div key={time}
                            onClick={() => form.setValue('time', time)}
                            className={cn('h-full w-full flex items-center justify-center py-4 border-[1px] border-gray-800 cursor-pointer', form.watch('time') === time && ' border-primary border-[3px]')}
                        >
                            {time}
                        </div>
                    )
                    )}
                </div>
            </div>
            <Button className='w-fit' type='button' onClick={() => setpage(1)}>Request Now</Button>
        </div>
    )
}

export default TimeForm