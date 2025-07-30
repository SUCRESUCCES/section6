/**
 * 접근 제어자
 * access modifier
 * => public private proteced
 */

class Employee {
  // 필드
  //   public name: string; // public :  기본이라 생략 가능
  //   private age: number; // private : 가장 제한적
  //   protected position: string; //

  // 생성자
  constructor(
    public name: string,
    private age: number,
    protected position: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }
  // 생성자에 접근제한자를 달면 필드를 자동으로 생성함
  // 필드 값의 초기화도 자동으로 함
  // -> 필드 작성 안해도됨 (필드 작성하면 중복으로 오류!)

  // 메서드
  work() {
    console.log("귀여움");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;
  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.age; //'age' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다
    this.position; // protected는 파생 클래스에서 사용 가능
  }
}

const employee = new Employee("얌", 1004, "천사");
employee.name = "밍";
// employee.age = 3;
// employee.position = "GOD";

console.log(employee);

// public 가능
// private 클래스 내에선 사용가능 외부에선 불가(파생 클래스에서도 불가)
