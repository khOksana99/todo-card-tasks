import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AboutDialogComponent} from "../../dialog/about/about-dialog.component";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

// "presentational component": отображает полученные данные
// подвал - нижняя часть страницы
export class FooterComponent implements OnInit {
    private year: Date;
    private site = 'https://Kharabara_Oksana.ua/';
    private blog = 'https://Kharabara_Oksana.ua/blog/tag/angular/';
    private siteName = 'For diploma Kharabara Oksana';

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
        this.year = new Date(); // текуший год
    }

    // окно "О программе"
    private openAboutDialog() {
        this.dialog.open(AboutDialogComponent,
            {
                autoFocus: false,
                data: {
                    dialogTitle: 'About program',
                    message: 'This is for Oksana Kharabara dimploma'
                },
                width: '400px'
            });

    }

}
