import { combineLatest, timer } from 'rxjs';

// timerOne 在1秒时发出第一个值，然后每4秒发送一次
const timerOne = timer(1000, 4000);
// timerTwo 在2秒时发出第一个值，然后每4秒发送一次
const timerTwo = timer(2000, 4000);
// timerThree 在3秒时发出第一个值，然后每4秒发送一次
const timerThree = timer(3000, 4000);

// 当一个 timer 发出值时，将每个 timer 的最新值作为一个数组发出
export const combineLatestExample = combineLatest([timerOne, timerTwo, timerThree]);
