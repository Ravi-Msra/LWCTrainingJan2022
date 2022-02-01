import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    checkboxHandler(event){
        if(event.target.checked){  
            this.template.querySelector('lightning-input[data-name="curAdd1"]').value = this.template.querySelector('lightning-input[data-name="perAdd1"]').value;
            this.template.querySelector('lightning-input[data-name="curAdd2"]').value = this.template.querySelector('lightning-input[data-name="perAdd2"]').value;
            this.template.querySelector('lightning-input[data-name="curLm"]').value = this.template.querySelector('lightning-input[data-name="perLm"]').value;
            this.template.querySelector('lightning-input[data-name="curZc"]').value = this.template.querySelector('lightning-input[data-name="perZc"]').value;
            //let selectedRows = this.template.querySelectorAll('lightning-input');             
        }
        else{
            this.template.querySelector('lightning-input[data-name="curAdd1"]').value = null;
            this.template.querySelector('lightning-input[data-name="curAdd2"]').value = null;
            this.template.querySelector('lightning-input[data-name="curLm"]').value = null;
            this.template.querySelector('lightning-input[data-name="curZc"]').value = null;
        }
    }
}