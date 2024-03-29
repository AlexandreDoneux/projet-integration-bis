import React, {Component} from 'react';
import { View, Button } from 'react-native';
import { separateur_de_flux, amplitude_sup } from '../tds';
//import { create_db } from '../DBCreation';

import BoutonScanBluetooth from './BoutonScanBluetooth';
import BoutonConnectDevice from './BoutonConnectDevice';

class BlocBoutons extends Component{
    constructor(props){
        super(props);
        this.state={
            bluetoothEnabled : false,
            //device : {name : "coucou"},

        }

        this.checkBluetoothEnabled=this.checkBluetoothEnabled.bind(this);
        this.alertState=this.alertState.bind(this);
    }

    

    async checkBluetoothEnabled() {
        try {
          console.log('App::componentDidMount Checking bluetooth status');
          let enabled = await RNBluetoothClassic.isBluetoothEnabled();
    
          console.log(`App::componentDidMount Status: ${enabled}`);
          this.setState({ bluetoothEnabled: enabled });
        } 
        catch (error) {
          console.log('App::componentDidMount Status Error: ', error);
          this.setState({ bluetoothEnabled: false });
        }
      }

    alertState(){
        alert(this.state.device.name);
        console.log(this.state.device)
    }

    render(){
        return(
            <View>
                <BoutonScanBluetooth changeUpperStateSelectedDevice={this.props.changeUpperStateSelectedDevice}/>

                <BoutonConnectDevice 
                selectedDevice={this.props.selectedDevice} 
                connectedDevice={this.props.connectedDevice} 
                changeUpperStateConnectedDevice={this.props.changeUpperStateConnectedDevice}
                initializeRead={this.props.initializeRead}
                />
                

            </View>
        )
    }

}

export default BlocBoutons