import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogPosition, MatDialogConfig } from '@angular/material/dialog';
import { ConfigurationService } from '../services/configuration.service';
import { Endpoint } from '../services/configuration.service';
import { Configuration } from '../services/configuration.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-mcf-spa',
  templateUrl: './mcf-spa.component.html',
  styleUrls: ['./mcf-spa.component.css']
})
export class McfSpaComponent implements OnInit {
  dialogRef;

  constructor(
    public router: Router,
    public dialog: MatDialog
    ) {
  }

  ngOnInit() {
  }

  public logout() {
    this.router.navigate(['login']);
  }

  public openSettingsDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.width = '650px';
    // dialogConfig.height = '650px';
    dialogConfig.position = {top: '200', left: '200'};
    dialogConfig.ariaLabel = 'Settings';

    this.dialogRef = this.dialog.open(SettingsDialogComponent, dialogConfig );
  }


}

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.html',
  styleUrls: ['./mcf-spa.component.css']
})
export class SettingsDialogComponent {

  endpoints: Endpoint[];
  settings: Configuration;

  constructor(
    public dialogRef: MatDialogRef<SettingsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public config: ConfigurationService,
    ) {
      this.endpoints = config.getEndpoints('MWS');
      this.settings = config.getSavedConfiguration();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  saveSettings() {
    this.dialogRef.close();
    this.config.saveConfiguration(this.settings);
  }
}
