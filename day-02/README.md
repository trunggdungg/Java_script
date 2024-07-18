### map() ###
- Duyệt qua các phần tử của mảng và thực hiện các thao tác trên các phần tử này.
- Trả về mảng mới có độ dài bằng mảng ban đầu

## Hàm `modulo2`

Hàm cho phép truyền vào một mảng các số và trả về một mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2.

### Ví dụ:

```javascript
function modulo2(arr) {
    return arr.map((e) => e % 2);
}

console.log(modulo2([4, 2, 5, 6, 2, 7])); // Kết quả: [0, 0, 1, 0, 0, 1]
```


### filter() ###

- Lặp qua các phần tử của mảng và lọc ra các phần tử thỏa mãn điều kiện nào đó
- Trả về mảng mới

```javascript
// Ví dụ : Tìm các số lẻ trong mảng
// Cách truyền thống
function oddNumbersNotFilter(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(oddNumbersNotFilter([4, 2, 5, 6, 2, 7]));

// Sử dụng filter
// filter = for + if
function oddNumbers(arr) {
    // const result = arr.filter(e => e % 2 == 1)
    // return result

    return arr.filter((e) => e % 2 == 1);
}

console.log(oddNumbers([4, 2, 5, 6, 2, 7]));
```

### reduce() ###
```javascript
// Ví dụ: Tính tổng các giá trị của mảng

// Không sử dụng reduce
function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Sử dụng reduce
function sum(arr) {
    let sum = arr.reduce(function (total, elem) {
        return total + elem;
    }, 0);

    return sum
}
```

### find() ###
- Lặp qua các phần tử của mảng và tìm ra phần tử đầu tiên thỏa mãn điều kiện
```javascript
// Ví dụ: Tìm giá trị của phần tử đầu tiên lớn hơn 5

function getNumberGreater5(arr) {
    return arr.find((e) => e > 5);
}

console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7]));
```

### findindex() ###
- Giống như find(), nhưng trả về chỉ số của phần tử thỏa mãn điều kiện

```javascript
// Ví dụ: Tìm chỉ số của phần tử đầu tiên lớn hơn 5

function getIndexOfNumberGreater5(arr) {
    return arr.findIndex((e) => e > 5);
}

console.log(getIndexOfNumberGreater5([1, 2, 3, 4, 5, 6, 7]));
```
##
# Khái niệm Object là gì? #
Về mặt định nghĩa, một đối tượng (một object) là một **danh sách các item**, mỗi item là một cặp **name-value**

Trong đó **value** có thể là: các kiểu dữ liệu cơ bản, function, hay cũng có thể là một object khác (kiểu dữ liệu phức hợp).

## Các phương thức của Object

```javascript
Ví dụ chúng ta có Object sau

let student = {
    name: "Nguyễn Văn A",
    age: 19,
    email: "nguyenvana@gmail.com"
}
```

**1.Lấy danh sách key của object**
```javascript
console.log(Object.keys(student));
```
**2.Lấy danh sách value của object**
```javascript
console.log(Object.values(student));
```
**3.Kiểm tra 1 key có nằm trong object hay không**
```javascript
console.log(student.hasOwnProperty("email"));
console.log(student.hasOwnProperty("name"));
```