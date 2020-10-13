import { Chapter, chapters } from './chapters.static'

interface Cordinates {
  x: number
  y: number
}

export class Flag {
  constructor(public corr: Cordinates, public chapter: Chapter) {}
}

export const flags = [
  new Flag({ x: 21, y: 75.5 }, chapters.cs),
  new Flag({ x: 63.3, y: 27 }, chapters.ras),
  new Flag({ x: 83.8, y: 53 }, chapters.ias),
  new Flag({ x: 22.5, y: 53 }, chapters.pes),
  new Flag({ x: 32.5, y: 42 }, chapters.embs),
  new Flag({ x: 77.1, y: 77 }, chapters.wie),
]