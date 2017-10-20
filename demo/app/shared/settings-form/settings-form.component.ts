import { MdSnackBar } from '@angular/material';
import { Component, EventEmitter, Output } from '@angular/core';
import { AppSettingsService } from '../../services/app-settings-service/app-settings-service';
import { WebSocketSupplier } from '../../../utils/services/webSocketSupplier/webSocketSupplier';
import { FormControl, NgForm } from '@angular/forms';
import { MapsManagerService } from '../../../../src/services/maps-manager/maps-manager.service';
import { CameraService } from '../../../../src/services/camera/camera.service';

@Component({
  selector: 'settings-form',
  templateUrl: 'settings-form.component.html',
  styleUrls: ['settings-form.component.css']
})
export class SettingsFormComponent {
  @Output() cleanMap = new EventEmitter();
  @Output() showEvent = new EventEmitter();
  private socket: SocketIO.Socket;
  private cameraService: CameraService;

  constructor(public settingsService: AppSettingsService,
              private snackBar: MdSnackBar,
              webSocket: WebSocketSupplier,
              private mapsManagerService: MapsManagerService) {

    this.socket = webSocket.get();
    this.socket.on('connect', () => {
      this.socket.emit('get_sending_params', '', (data) => {
        this.settingsService.numOfEntities = data && data.numOfEntities;
        this.settingsService.entitiesUpdateRate = data && data.interval;
      });
    });
  }

  applySettings() {
    this.socket.emit('change_sending', {
      rate: this.settingsService.entitiesUpdateRate,
      numOfEntities: this.settingsService.numOfEntities,
    }, () => {
      this.cleanMap.emit();
      this.snackBar.open(' Changed successfully', 'ok', { duration: 2000 });
    });
  }

  newYorkToggle(toggle) {
    if (toggle.checked) {
      if (!this.cameraService) {
        this.cameraService = this.mapsManagerService.getMap().getCameraService();
      }
      this.cameraService.cameraFlyTo({
        destination: Cesium.Cartesian3.fromDegrees(35.771959, 31.217018,800000)
      });
    }
    console.log(toggle);
  }


  myErrorStateMatcher(control: FormControl, form: NgForm): boolean {
    // Error when invalid control is dirty, touched, or submitted
    const isSubmitted = form && form.submitted;
    console.log(control);
    return true;
  }
}
