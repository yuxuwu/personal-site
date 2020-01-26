import { Component, OnInit } from '@angular/core';

import * as p5 from 'p5';

@Component({
	selector: 'yu-panel',
	templateUrl: './yu-panel.component.html',
	styleUrls: ['./yu-panel.component.scss']
})
export class YuPanelComponent implements OnInit {


	ngOnInit() {
		const sketch = (s) => {
			s.setup = () => {
				s.createCanvas(400, 400);
				console.log("We're in baby ;)");
			}
			s.draw = () => {
				s.background(255);
				s.rect(100, 100, 100, 100);
			}
		}

		let canvas = new p5(sketch);
	}

}
