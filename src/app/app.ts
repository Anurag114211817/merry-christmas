import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App implements OnInit {
  declare msg: SpeechSynthesisUtterance;
  message = signal('Wishing you a night full of wonder.');
  isRevealed = signal(false);

  ngOnInit(): void {
    this.msg = new SpeechSynthesisUtterance('Merry Christmas! May your day be golden.');
    this.msg.pitch = 1.2;
    this.msg.rate = 0.9;
  }

  playCarol(): void {
    this.isRevealed.set(true);
    this.message.set('“Peace on earth will come to stay, when we live Christmas every day.”');

    window.speechSynthesis.speak(this.msg);
  }
}
