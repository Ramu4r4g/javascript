const plc = [
    "Chennai",
    "Hyderabad",
    "Bangalore",
    "Pune",
    2024,
    "Goa",
    "Jaipur",
    "Manali",
];

for (let i = 0; i < plc.length; i++) {
    if (typeof plc[i] !== "string") continue;
    console.log(plc[i]);
}

for (let i = 0; i < plc.length; i++) {
    if (typeof plc[i] !== "string") break;
    console.log(plc[i]);
}
