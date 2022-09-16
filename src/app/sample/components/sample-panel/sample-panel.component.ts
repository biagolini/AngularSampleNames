import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatTableDataSource } from '@angular/material/table';

export interface Item {
  name: any;
}


@Component({
  selector: 'app-sample-panel',
  templateUrl: './sample-panel.component.html',
  styleUrls: ['./sample-panel.component.scss']
})
export class SamplePanelComponent implements OnInit {


  constructor(private form: FormBuilder) {}

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  items: Item[] = [ ];

  displayedColumns = ['name'];

  sampleControl = new FormControl('');

  randomSample = new MatTableDataSource();

  itemForm = this.form.group({
    itemName: ['', Validators.required],
  });


  ngOnInit(): void {
    this.randomSample.data = [];
    var aux:any = localStorage.getItem("storeItens");
    let storeAux = JSON.parse(aux);
    storeAux.forEach((element: any) => {
      this.items= [...this.items,element];
    })
  }


  sampleOrder(){
    this.randomSample.data = [];
    let n:number= this.items.length;
    let itemsCopy= [...this.items];
    for(let i = 0; i<n; i++){
      let nSorteado = Math.floor(Math.random() *  itemsCopy.length);
      this.randomSample.data = [...this.randomSample.data,itemsCopy[nSorteado]]
      itemsCopy.splice(nSorteado,1)
      }
  }

  saveLocally(){
    localStorage.setItem("storeItens", JSON.stringify(this.items));
  }


  sampleItem() {
    let sorteado = this.items[Math.floor(Math.random() *  this.items.length)];
    this.sampleControl.setValue(sorteado.name)

    this.sampleOrder()
  }


  addNewItem() {
    this.items.push({ name: this.itemForm.value.itemName });
    this.itemForm.setValue({
      itemName: '',
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our item
    if (value) {
      this.items.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(item: Item): void {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

}
