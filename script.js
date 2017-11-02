var food = {
    name: "עוף בביסלי",
    time: "1: 30 ",
    difficalty: "בינוני",
    items: [
        " שוקי עוף",
        "1/2 כוס קורנפלור",
        "2 ביצים טרופות",
        "2 שקיות ביסלי איזה טעם שאוהבים", ],
    cook: [
        "מרסקים את הביסלי במעבד מזון עד שמתקבלים פירורים קטנים (אבל לא אבקה)",
        "שמים את שוקי העוף והקורנפלור בשקית ניילון גדולה ועבה ומנערים עד שהשוקיים מצופות לגמרי. מנערים אותן מעודפי קורנפלור.",
        "טובלים כל פולקע בביצה ואחר כך בפירורי הביסלי. צריך להתקבל ציפוי עבה של פירורים",
        "מניחים בתבנית אפייה ומפזרים מעל את הפירורים שנותרו. אופים בחום בינוני (180) 60 דקות. אין צורך להפוך באמצע האפייה",

    ]
}

var food1 = {
    name: "כבד עוף בריבת בצל,",
    time: "20 דקות",
    difficalty: "בינוני",
    items: [
        " 800 גרם כבד עוף",
        "2 בצלים בינונים",
        "מלח ",
        "פלפל שחור גוןס",
        "ריבת בצל",
    ],

    cook: [
        "צולים את הכבד 20 שניות בכל צד.",
        "את הבצל חותכים לרצועות ומטגנים עד להזהבה.",
        "מוסיפים את הכבד, את ריבת הבצל (כ - 3 כפות גדושות) ומתבלים לפי הטעם בפלפל שחור גרוס ובקורט מלח.",
        "את התערובות משאירים כשלוש דקות על האש."
    ]
}

var food2 = {
    name: "רוטב אלפרדו קלאסי,",
    time: "30 דקות",
    difficalty: "קל",
    items: [
        "500 גרם פסטה פטוצ'יני אסם",
        "1 מיכל שמנת מתוקה",
        "50 גרם חמאה",
        "3/5 כוס פרמזן מגוררת",
        "קורט אגוז מוסקט",
    ],

    cook: [
        "שמים את השמנת והחמאה בסיר גדול שיוכל להכיל גם את הפסטה. מתיכים ומביאים לרתיחה עדינה. מבשלים על אש קטנה כמה דקות, עד שהתערובת מתחילה להסמיך.",
        "בינתיים מבשלים את הפסטה בהרבה מים רותחים מומלחים.",
        "רגע לפני שהפסטה מוכנה מוסיפים לתערובת השמנת את הגבינה והמוסקט ומערבבים היטב, עד שהגבינה נמסה והרוטב מסמיך.",
        "מסננים את הפסטה ומוסיפים מיד לסיר עם הרוטב. מבשלים על אש קטנה אגב ערבוב כדקה, עד שכל הפסטה משוחה היטב ברוטב, ומגישים מיד.",
    ]
}

var food3 = {
    name: "קינוח שכבות טירמיסו",
    time: "30 דקות",
    difficalty: "קל",
    items: [
        "250 גרם פתיבר בטעם שוקולד מריר",
        "50 גרם חמאה",
        "2 מיכלי שמנת מתוקה להקצפה (500 מ”ל)",
        "1 גביע גבינת מסקרפונה (225 גרם)",
        "1/2 כוס אבקת סוכר (75 גרם)",
        "כוס אספרסו קפול או נס חזק",

    ]
}





var foods = [food, food1, food2, food3]

function printFood(food) {
    var btn = document.createElement("div");
    btn.innerHTML = food.name + ' ' + food.time + ' ' + food.difficalty + ' ' + food.cook;
    document.getElementById('bigbox').appendChild(btn);

}

function randomFood() {
    for (var i = 0; i < 3; i++) {
        random = Math.floor(Math.random() * foods.length);
        printFood(foods[random]);
    }
}
