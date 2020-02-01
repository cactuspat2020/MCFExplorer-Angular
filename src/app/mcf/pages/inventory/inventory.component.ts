// tslint:disable: max-line-length
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatMenuTrigger } from '@angular/material';


export interface InventorySummary {
  name: string;
  condition: string;
  fnsku: string;
  asin: string;
  total_supply: number;
  inbound: number;
  instock: number;
}

const MOCK_INVENTORY: InventorySummary[] = [
  {name: 'PM_012',             condition: 'NewItem', fnsku: 'X0020PW9FX', asin: 'B008NAKLW6', total_supply: 33036, inbound: 33000, instock: 36},
  {name: 'Test Waffle 1234',   condition: 'NewItem', fnsku: 'X002ELBGON', asin: 'B00EAI31C2', total_supply: 44,    inbound: 40, instock: 4},
  {name: 'quilts-2012-cal',    condition: 'NewItem', fnsku: '1935726080', asin: '1935726080', total_supply: 39,    inbound: 20, instock: 19},
  {name: 'PM_002',             condition: 'NewItem', fnsku: '1841271780', asin: '1841271780', total_supply: 6,     inbound: 0, instock: 6},
  {name: 'xxxxxxx',            condition: 'NewItem', fnsku: '0895559285', asin: '0895559285', total_supply: 53,     inbound: 20,  instock: 33},
  {name: 'PM_013',             condition: 'NewItem', fnsku: 'X0020PW9FX', asin: 'B008NAKLW6', total_supply: 33036, inbound: 33000, instock: 36},
  {name: 'Test Waffle 5678',   condition: 'NewItem', fnsku: 'X002ELBGON', asin: 'B00EAI31C2', total_supply: 44,    inbound: 40, instock: 4},
  {name: 'quilts-2010-cal',    condition: 'NewItem', fnsku: '1935726080', asin: '1935726080', total_supply: 39,    inbound: 20, instock: 19},
  {name: 'PM_003',             condition: 'NewItem', fnsku: '1841271780', asin: '1841271780', total_supply: 6,     inbound: 0, instock: 6},
  {name: 'xxxxyyy',            condition: 'NewItem', fnsku: '0895559285', asin: '0895559285', total_supply: 53,     inbound: 20,  instock: 33},
  {name: 'PM_013',             condition: 'NewItem', fnsku: 'X0020PW9FX', asin: 'B008NAKLW6', total_supply: 33036, inbound: 33000, instock: 36},
  {name: 'Test Waffle abcd',   condition: 'NewItem', fnsku: 'X002ELBGON', asin: 'B00EAI31C2', total_supply: 44,    inbound: 40, instock: 4},
  {name: 'quilts-2010-cal',    condition: 'NewItem', fnsku: '1935726080', asin: '1935726080', total_supply: 39,    inbound: 20, instock: 19},
  {name: 'PM_005',             condition: 'NewItem', fnsku: '1841271780', asin: '1841271780', total_supply: 6,     inbound: 0, instock: 6},
  {name: 'aaaaaaa',            condition: 'NewItem', fnsku: '0895559285', asin: '0895559285', total_supply: 53,     inbound: 20,  instock: 33},
  {name: 'PM_014',             condition: 'NewItem', fnsku: 'X0020PW9FX', asin: 'B008NAKLW6', total_supply: 33036, inbound: 33000, instock: 36},
  {name: 'Good Waffle 1234',   condition: 'NewItem', fnsku: 'X002ELBGON', asin: 'B00EAI31C2', total_supply: 44,    inbound: 40, instock: 4},
  {name: 'blanket-2012-cal',    condition: 'NewItem', fnsku: '1935726080', asin: '1935726080', total_supply: 39,    inbound: 20, instock: 19},
  {name: 'PM_022',             condition: 'NewItem', fnsku: '1841271780', asin: '1841271780', total_supply: 6,     inbound: 0, instock: 6},
  {name: 'Mamba',            condition: 'NewItem', fnsku: '0895559285', asin: '0895559285', total_supply: 53,     inbound: 20,  instock: 33},
  {name: 'Kobe',            condition: 'NewItem', fnsku: '0895559285', asin: '0895559285', total_supply: 53,     inbound: 20,  instock: 33},
];


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'condition', 'fnsku', 'asin', 'total_supply', 'inbound', 'instock'];
  dataSource: MatTableDataSource<InventorySummary> = new MatTableDataSource(MOCK_INVENTORY);
  selectedName: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatMenuTrigger, {static: true}) contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent, item: Item) {
    this.selectRow(item);
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }
  onContextMenuAction1(item: Item) {
    alert(`Pretend I'm creating an order for ${item.name}`);
  }

  onContextMenuAction2(item: Item) {
    alert(`Pretend I'm looking at the details for ${item.name}`);
  }
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // Callback when a table row is selected
  selectRow(row) {
    this.selectedName = row.name;
  }
}
export interface Item {
  id: number;
  name: string;
}
