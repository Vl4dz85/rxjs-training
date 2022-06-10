import { interval } from "rxjs";

const sequence$ = interval(1000);

const sub1 = sequence$.subscribe((v) => {
  console.log("Sub 1", v);
});

setTimeout(() => {
  sequence$.subscribe((v) => {
    console.log("Sub 2", v);
  });
}, 5000);
