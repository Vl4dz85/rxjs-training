import { fromEvent, interval } from "rxjs";

const sequence$ = fromEvent<MouseEvent>(document, "click");

const sub1 = sequence$.subscribe((v) => {
  console.log("Sub 1", v.clientX);
});

setTimeout(() => {
  sequence$.subscribe((v) => {
    console.log("Sub 2", v.clientX);
  });
}, 5000);
