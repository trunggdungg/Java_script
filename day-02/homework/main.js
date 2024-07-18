// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
products.forEach(product => {
    // return product.name + " - " + product.price + " - " + product.brand + " - " + product.count
    console.log(product.name + " - " + product.price + " - " + product.brand + " - " + product.count)
});

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
function sumPrice(prd) {
    let totalPrice = prd.reduce(function (total, product) {
        return total + (product.price * product.count);
    }, 0);

    return totalPrice;
}
console.log(sumPrice(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
for (let i = 0; i < products.length; i++) {
    if (products[i].brand == "Apple") {
        console.log(products[i].name + " - " + products[i].price + " - " + products[i].brand + " - " + products[i].count);
    }
}

// 4. Tìm các sản phẩm có giá > 20000000
for (let i = 0; i < products.length; i++) {
    if (products[i].price > 20000000) {
        console.log(products[i].name + " - " + products[i].price + " - " + products[i].brand + " - " + products[i].count);
    }
}

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

function findProduct(prd) {
    let keyword = "pro";
    return prd.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
    );
}
console.log(findProduct(products));
// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

let newproduct = {
    name: "Nokia 1280",
    price: 16500000,
    brand: "Nokia",
    count: 2,
}
products.push(newproduct);
console.log(products)

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
for (let i = 0; i < products.length; i++) {
    if (products[i].brand == "Samsung") {
        products.splice(0, 1)
    }
}
console.log(products);

// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((a, b) => {
    return a.price - b.price;
})
console.log(products);

// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((a,b) => {
    return b.count - a.count;
})

console.log(products)

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let arrr = [];
for (let i = 0; i < 2; i++) {
    let randomIndex = Math.floor(Math.random() * products.length); 
    arrr[i] = products[randomIndex]; 
}

console.log(arrr);