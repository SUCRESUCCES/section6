/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 인터페이스 프로퍼티는 무조건 public

// 캐릭터 클래스가 캐릭터인터페이스 구현
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string // 인터페이스에 구현하지말고 따로 정의하면 가능
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
