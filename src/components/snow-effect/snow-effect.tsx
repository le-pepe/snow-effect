import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'snow-effect',
  styleUrl: 'snow-effect.css',
  shadow: true,
})

export class SnowEffect {
  @Prop() flakes: number = 100;
  @Prop() color: string = 'white';
  @Prop() speed: number = 1;

  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;
  private snowflakes: { color: string; speedY: number; speedX: number; x: number; y: number; radius: number }[];

  render() {
    return <canvas ref={el => this.canvas = el}></canvas>;
  }

  @Watch('flakes')
  @Watch('color')
  @Watch('speed')
  watchMultiple(newVal: any, oldVal: any, propName: string) {
    console.log(`${propName} changed from ${oldVal} to ${newVal}`);
    if (newVal !== oldVal) {
      this.initSnowEffect();
    }
  }

  componentDidLoad() {
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    this.initSnowEffect();
    this.animateSnowflakes();
    window.addEventListener('resize', this.resizeCanvas.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.resizeCanvas.bind(this));
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }



  initSnowEffect() {
    const maxAngle = 15 * (Math.PI / 180);
    this.snowflakes = Array.from({ length: this.flakes }, () => {
      const speedY = (Math.random() + 0.5) * this.speed;
      const maxSpeedX = Math.tan(maxAngle) * speedY;
      return {
        x: Math.random() * this.canvas.width,
        y: Math.random() * -this.canvas.height,
        radius: Math.random() * 3 + 1,
        speedY: speedY,
        speedX: (Math.random() * 2 - 1) * maxSpeedX,
        color: this.color,
      };
    });
  }

  animateSnowflakes() {
    const drawSnowflakes = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let flake of this.snowflakes) {
        this.ctx.beginPath();
        this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();

        flake.y += flake.speedY;
        flake.x += flake.speedX;

        if (flake.y > this.canvas.height) {
          flake.y = Math.random() * -this.canvas.height;
          flake.x = Math.random() * this.canvas.width;
        }
      }

      requestAnimationFrame(drawSnowflakes);
    };

    drawSnowflakes();
  }

}
