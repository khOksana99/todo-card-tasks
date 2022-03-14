import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

// преобразовывает дату в нужный текстовый формат
@Pipe({
    name: 'taskDate'
})
export class TaskDatePipe extends DatePipe implements PipeTransform {

    transform(date: Date | string, format: string = 'mediumDate'): string { // mediumDate - форматирование по-умолчанию

        if (date == null) {
            return 'Without deadline';
        }

        date = new Date(date);

        const currentDate = new Date().getDate();

        if (date.getDate() === currentDate) {
            return 'Today';
        }

        if (date.getDate() === currentDate - 1) {
            return 'Yesterday';
        }

        if (date.getDate() === currentDate + 1) {
            return 'Tomorrow';
        }

        return new DatePipe('ua-UA').transform(date, format); // показывать дату в нужной локали
    }

}
