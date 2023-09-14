import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {
  typedTextSpan: any;
  cursorSpan: any;
  textArray: string[] = ["unstoppable", "inspiring", "exceptional", "heroes"];
  typingDelay = 200;
  erasingDelay = 100;
  newTextDelay = 2000;
  textArrayIndex = 0;
  charIndex = 0;

  constructor() { }

  ngOnInit() {
    this.typedTextSpan = document.querySelector(".typed-text");
    this.cursorSpan = document.querySelector(".cursor");
    this.type(); // Start the typing effect when the component initializes
  }

  type() {
    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      if (!this.cursorSpan.classList.contains("typing")) {
        this.cursorSpan.classList.add("typing");
      }
      this.typedTextSpan.textContent += this.textArray[this.textArrayIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.type(), this.typingDelay);
    } else {
      this.cursorSpan.classList.remove("typing");
      setTimeout(() => this.erase(), this.newTextDelay);
    }
  }

  erase() {
    if (this.charIndex > 0) {
      if (!this.cursorSpan.classList.contains("typing")) {
        this.cursorSpan.classList.add("typing");
      }
      this.typedTextSpan.textContent = this.textArray[this.textArrayIndex].substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.erase(), this.erasingDelay);
    } else {
      this.cursorSpan.classList.remove("typing");
      this.textArrayIndex = (this.textArrayIndex + 1) % this.textArray.length;
      setTimeout(() => this.type(), this.typingDelay + 1100);
    }
  }
}
