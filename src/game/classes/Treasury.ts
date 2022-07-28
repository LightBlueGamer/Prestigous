export class Treasury {
    level: number;
    capacity: number;
    filled: number;
    constructor(level: number, capacity: number, filled: number) {
        this.level = level;
        this.capacity = capacity;
        this.filled = filled;
    }
}