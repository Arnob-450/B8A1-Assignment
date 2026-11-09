
const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
};



const processInput = (value: number | string | boolean)=> {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return "Active";
    } else if (value === false) {
      return "Inactive";
    }
  }
};


const formatCoordinate = (
  location: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = location;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

interface Courses {
  title: string;
  students: number;
  isPublished: boolean;
}
const courses: Courses[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

const getPopularCourses = (courses: Courses[], minStudents: number): Courses[] => {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
};


interface Users {
  id: number;
  name: string;
  role: string;
}

const users: Users[] = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];
const pluckValues = <T, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map((user) => user[key]);
};



class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
const manager = new Manager("Alice", 50000, "Engineering");



const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};



    
