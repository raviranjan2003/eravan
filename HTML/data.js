document.body.onload = addCrops;
const navlinks = [
  {
    name: "Italian Basil",
    fname: "ItalianBasil",
    data: [
      {
        date: "25-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.45",
      },
      {
        date: "24-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.45",
      },
      {
        date: "23-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.45",
      },
      {
        date: "22-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.450",
      },
      {
        date: "21-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.454",
      },
      {
        date: "20-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.45",
      },
      {
        date: "19-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.45",
      },
      {
        date: "18-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.454",
      },
      {
        date: "17-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.45",
      },
      {
        date: "16-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.453",
      },
      {
        date: "15-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.45",
      },
      {
        date: "14-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.45",
      },
      {
        date: "13-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.450",
      },
      {
        date: "12-05-2023",
        retailPrice: "₹360.45",
        wholesalePrice: "₹234.29",
        weekHigh: "₹360.45",
        weekLow: "₹360.45",
      },
    ],
  },
  {
    name: "Swiss Chard",
    fname: "SwissChard",
    data: [
      {
        date: "25-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "24-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "23-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "22-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "21-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "20-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "19-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "18-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "17-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "16-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "15-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "14-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "13-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
      {
        date: "12-05-2023",
        retailPrice: "₹334.20",
        wholesalePrice: "₹217.23",
        weekHigh: "₹334.20",
        weekLow: "₹334.20",
      },
    ]
  },
  {
    name: "Broccoli",
    fname: "Broccoli",
    data: [
      {
        date: "25-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "24-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "23-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "22-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "21-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "20-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "19-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "18-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "17-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "16-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "15-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "14-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "13-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
      {
        date: "12-05-2023",
        retailPrice: "₹111.84",
        wholesalePrice: "₹72.70",
        weekHigh: "₹111.84",
        weekLow: "₹111.84",
      },
    ]
  },
  {
    name: "Kale",
    fname: "Kale",
    data:[
      {date:"23-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
      {date:"22-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
      {date:"21-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
      {date:"20-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
      {date:"19-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
      {date:"18-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
      {date:"17-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
      {date:"16-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
      {date:"15-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
      {date:"14-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
      {date:"13-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
      {date:"12-05-2023",retailPrice:"₹75.00",wholesalePrice:"₹48.75",weekHigh:"₹75.00",weekLow:"₹75.00"},
    ]
  },
  {
    name: "Celery",
    fname: "Celery",
    data:[
      {date:"23-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"22-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"21-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"20-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"19-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"18-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"17-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"16-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"15-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"14-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.8405"},
      {date:"13-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"12-05-2023",retailPrice:"₹136.84",wholesalePrice:"	₹62.86",weekHigh:"₹136.84",weekLow:"₹136.84"},
    ]
  },
  {
    name: "Rosemary",
    fname: "Rosemary",
    data:[
      {date:"23-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"22-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"21-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"20-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"19-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"18-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"17-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"16-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"15-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"14-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"13-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
      {date:"12-05-2023",retailPrice:"₹136.84",wholesalePrice:"₹88.95",weekHigh:"₹136.84",weekLow:"₹136.84"},
    ]
  },
  {
    name: "Parsley 100 grams",
    fname: "Parsley100grams",
    data:[
      {date:"23-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
      {date:"22-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
      {date:"21-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
      {date:"20-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
      {date:"19-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
      {date:"18-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
      {date:"17-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
      {date:"16-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
      {date:"15-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
      {date:"14-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
      {date:"13-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
      {date:"12-05-2023",retailPrice:"₹29.54",wholesalePrice:"₹19.20",weekHigh:"₹29.54",weekLow:"₹29.54"},
    ]
  },
  {
    name: "Pak Choi",
    fname: "PakChoi",
    data:[
      {date:"23-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
      {date:"22-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
      {date:"21-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
      {date:"20-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
      {date:"19-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
      {date:"18-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
      {date:"17-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
      {date:"16-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
      {date:"15-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
      {date:"14-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
      {date:"13-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
      {date:"12-05-2023",retailPrice:"₹42.00",wholesalePrice:"₹27.30",weekHigh:"₹42.00",weekLow:"₹42.00"},
    ]
  },
  {
    name: "Asparagus",
    fname: "Asparagus",
    data:[
      {date:"23-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
      {date:"22-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
      {date:"21-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
      {date:"20-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
      {date:"19-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
      {date:"18-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
      {date:"17-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
      {date:"16-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
      {date:"15-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
      {date:"14-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
      {date:"13-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
      {date:"12-05-2023",retailPrice:"₹402.63",wholesalePrice:"₹261.71",weekHigh:"₹402.63",weekLow:"₹402.63"},
    ]
  },
  {
    name: "Thyme",
    fname: "Thyme",
    data:[
      {date:"23-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
      {date:"22-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
      {date:"21-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
      {date:"20-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
      {date:"19-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
      {date:"18-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
      {date:"17-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
      {date:"16-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
      {date:"15-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
      {date:"14-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
      {date:"13-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
      {date:"12-05-2023",retailPrice:"₹40.79",wholesalePrice:"₹26.51",weekHigh:"₹40.79",weekLow:"₹40.79"},
    ]
  },
  {
    name: "Broccoli Florets",
    fname: "BroccoliFlorets",
    data:[
      {date:"23-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
      {date:"22-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
      {date:"21-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
      {date:"20-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
      {date:"19-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
      {date:"18-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
      {date:"17-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
      {date:"16-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
      {date:"15-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
      {date:"14-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
      {date:"13-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
      {date:"12-05-2023",retailPrice:"₹71.05",wholesalePrice:"₹46.18",weekHigh:"₹71.05",weekLow:"₹71.05"},
    ]
  },
  {
    name: "Lollo Rossa",
    fname: "LolloRossa",
    data:[
      {date:"23-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
      {date:"22-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
      {date:"21-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
      {date:"20-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
      {date:"19-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
      {date:"18-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
      {date:"17-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
      {date:"16-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
      {date:"15-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
      {date:"14-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
      {date:"13-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
      {date:"12-05-2023",retailPrice:"₹105.00",wholesalePrice:"₹68.25",weekHigh:"₹105.00",weekLow:"₹105.00"},
    ]
  },
  {
    name: "Red Oak Lettuce",
    fname: "RedOakLettuce",
    data:[
      {date:"23-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
      {date:"22-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
      {date:"21-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
      {date:"20-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
      {date:"19-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
      {date:"18-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
      {date:"17-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
      {date:"16-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
      {date:"15-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
      {date:"14-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
      {date:"13-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
      {date:"12-05-2023",retailPrice:"₹174.09",wholesalePrice:"₹113.16",weekHigh:"₹174.09",weekLow:"₹174.09"},
    ]
  },
  {
    name: "Green Butterhead Lettuce",
    fname: "GreenButterheadLettuce",
    data:[
      {date:"23-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
      {date:"22-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
      {date:"21-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
      {date:"20-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
      {date:"19-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
      {date:"18-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
      {date:"17-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
      {date:"16-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
      {date:"15-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
      {date:"14-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
      {date:"13-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
      {date:"12-05-2023",retailPrice:"₹177.54",wholesalePrice:"₹115.40",weekHigh:"₹177.54",weekLow:"₹177.54"},
    ]
  },
  {
    name: "Romaine Lettuce",
    fname: "RomaineLettuce",
    data:[
      {date:"23-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
      {date:"22-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
      {date:"21-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
      {date:"20-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
      {date:"19-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
      {date:"18-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
      {date:"17-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
      {date:"16-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
      {date:"15-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
      {date:"14-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
      {date:"13-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
      {date:"12-05-2023",retailPrice:"₹184.43",wholesalePrice:"₹119.88",weekHigh:"₹184.43",weekLow:"₹184.43"},
    ]
  },
  {
    name: "Tulsi",
    fname: "Tulsi",
    data:[
      {date:"23-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
      {date:"22-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
      {date:"21-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
      {date:"20-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
      {date:"19-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
      {date:"18-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
      {date:"17-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
      {date:"16-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
      {date:"15-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
      {date:"14-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
      {date:"13-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
      {date:"12-05-2023",retailPrice:"₹14.53",wholesalePrice:"₹9.44",weekHigh:"₹14.53",weekLow:"₹14.53"},
    ]
  },
  {
    name: "Chinese Cabbage",
    fname: "ChineseCabbage",
    data:[
      {date:"23-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
      {date:"22-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
      {date:"21-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
      {date:"20-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
      {date:"19-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
      {date:"18-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
      {date:"17-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
      {date:"16-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
      {date:"15-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
      {date:"14-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
      {date:"13-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
      {date:"12-05-2023",retailPrice:"₹71.50",wholesalePrice:"₹46.48",weekHigh:"₹71.50",weekLow:"₹71.50"},
    ]
  },
  {
    name: "Leeks",
    fname: "Leeks",
    data:[
      {date:"23-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
      {date:"22-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
      {date:"21-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
      {date:"20-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
      {date:"19-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
      {date:"18-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
      {date:"17-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
      {date:"16-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
      {date:"15-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
      {date:"14-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
      {date:"13-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
      {date:"12-05-2023",retailPrice:"₹134.21",wholesalePrice:"₹87.24",weekHigh:"₹134.21",weekLow:"₹134.21"},
    ]
  },
  {
    name: "Mint",
    fname: "Mint",
    data:[
      {date:"23-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
      {date:"22-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
      {date:"21-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
      {date:"20-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
      {date:"19-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
      {date:"18-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
      {date:"17-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
      {date:"16-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
      {date:"15-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
      {date:"14-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
      {date:"13-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
      {date:"12-05-2023",retailPrice:"₹7.13",wholesalePrice:"₹4.63",weekHigh:"₹7.13",weekLow:"₹7.13"},
    ]
  },
  {
    name: "Amaranthus",
    fname: "Amaranthus",
    data:[
      {date:"23-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
      {date:"22-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
      {date:"21-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
      {date:"20-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
      {date:"19-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
      {date:"18-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
      {date:"17-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
      {date:"16-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
      {date:"15-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
      {date:"14-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
      {date:"13-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
      {date:"12-05-2023",retailPrice:"₹23.50",wholesalePrice:"₹15.28",weekHigh:"₹23.50",weekLow:"₹23.50"},
    ]
  },
  {
    name: "Mint Leaves",
    fname: "MintLeaves",
    data:[
      {date:"23-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
      {date:"22-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
      {date:"21-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
      {date:"20-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
      {date:"19-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
      {date:"18-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
      {date:"17-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
      {date:"16-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
      {date:"15-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
      {date:"14-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
      {date:"13-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
      {date:"12-05-2023",retailPrice:"₹27.47",wholesalePrice:"₹17.86",weekHigh:"₹27.47",weekLow:"₹27.47"},
    ]
  },
  {
    name: "Palak",
    fname: "Palak",
    data:[
      {date:"23-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
      {date:"22-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
      {date:"21-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
      {date:"20-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
      {date:"19-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
      {date:"18-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
      {date:"17-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
      {date:"16-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
      {date:"15-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
      {date:"14-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
      {date:"13-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
      {date:"12-05-2023",retailPrice:"₹41.00",wholesalePrice:"₹26.65",weekHigh:"₹41.00",weekLow:"₹41.00"},
    ]
  },
  {
    name: "Amaranthus Green",
    fname: "AmaranthusGreen",
    data:[
      {date:"23-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
      {date:"22-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
      {date:"21-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
      {date:"20-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
      {date:"19-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
      {date:"18-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
      {date:"17-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
      {date:"16-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
      {date:"15-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
      {date:"14-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
      {date:"13-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
      {date:"12-05-2023",retailPrice:"₹25.50",wholesalePrice:"₹16.58",weekHigh:"₹25.50",weekLow:"₹25.50"},
    ]
  },
  {
    name: "Colocasia Leaf",
    fname: "ColocasiaLeaf",
    data:[
      {date:"23-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"₹28.16",weekLow:"₹28.16"},
      {date:"22-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"₹28.16",weekLow:"₹28.16"},
      {date:"21-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"₹28.16",weekLow:"₹28.16"},
      {date:"20-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"₹28.16",weekLow:"₹28.16"},
      {date:"19-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"₹28.16",weekLow:"₹28.16"},
      {date:"18-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"136.84",weekLow:"₹28.16"},
      {date:"17-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"₹28.16",weekLow:"₹28.16"},
      {date:"16-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"₹28.16",weekLow:"₹28.16"},
      {date:"15-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"₹28.16",weekLow:"₹28.16"},
      {date:"14-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"₹28.16",weekLow:"₹28.16"},
      {date:"13-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"₹28.16",weekLow:"₹28.16"},
      {date:"12-05-2023",retailPrice:"₹28.16",wholesalePrice:"₹18.30",weekHigh:"₹28.16",weekLow:"₹28.16"},
    ]
  },
  {
    name: "Methi",
    fname: "Methi",
    data:[
      {date:"23-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
      {date:"22-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
      {date:"21-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
      {date:"20-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
      {date:"19-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
      {date:"18-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
      {date:"17-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
      {date:"16-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
      {date:"15-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
      {date:"14-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
      {date:"13-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
      {date:"12-05-2023",retailPrice:"₹19.50",wholesalePrice:"₹12.68",weekHigh:"₹19.50",weekLow:"₹19.50"},
    ]
  },
];




// const myArray = [
//   {
//     date: "23-05-2023",
//     retailPrice: "360.45",
//     wholesalePrice: "234.29",
//     weekHigh: "360.45",
//     weekLow: "360.45",
//   },
//   {
//     date: "22-05-2023",
//     retailPrice: "334.20",
//     wholesalePrice: "217.23",
//     weekHigh: "334.20",
//     weekLow: "334.20",
//   },
//   {
//     date: "21-05-2023",
//     retailPrice: "111.84",
//     wholesalePrice: "72.70",
//     weekHigh: "111.84",
//     weekLow: "111.84",
//   },
//   {
//     date: "20-05-2023",
//     retailPrice: "75.00",
//     wholesalePrice: "48.75",
//     weekHigh: "75.00",
//     weekLow: "75.00",
//   },
//   {
//     date: "19-05-2023",
//     retailPrice: "96.71",
//     wholesalePrice: "62.86",
//     weekHigh: "96.71",
//     weekLow: "96.71",
//   },
//   {
//     date: "18-05-2023",
//     retailPrice: "136.84",
//     wholesalePrice: "88.95",
//     weekHigh: "136.84",
//     weekLow: "136.84",
//   },
//   {
//     date: "17-05-2023",
//     retailPrice: "42.00",
//     wholesalePrice: "27.30",
//     weekHigh: "42.00",
//     weekLow: "42.00",
//   },
//   {
//     date: "16-05-2023",
//     retailPrice: "402.63",
//     wholesalePrice: "261.71",
//     weekHigh: "402.63",
//     weekLow: "402.63",
//   },
//   {
//     date: "15-05-2023",
//     retailPrice: "40.79",
//     wholesalePrice: "26.51",
//     weekHigh: "40.79",
//     weekLow: "40.79",
//   },
//   {
//     date: "14-05-2023",
//     retailPrice: "71.05",
//     wholesalePrice: "46.18",
//     weekHigh: "71.05",
//     weekLow: "71.05",
//   },
//   {
//     date: "13-05-2023",
//     retailPrice: "105.00",
//     wholesalePrice: "68.25",
//     weekHigh: "105.00",
//     weekLow: "105.00",
//   },
//   {
//     date: "12-05-2023",
//     retailPrice: "14.53",
//     wholesalePrice: "9.44",
//     weekHigh: "14.53",
//     weekLow: "14.53",
//   },
// ];

function sellNow(){
    console.log("Sell Now");
    window.location.href = "register.html";
}

function changeTableData(cropsData) {
  const data = cropsData.data;
  const table = document.getElementById("priceTable");
  let row = `<tr></tr>`;
  table.innerHTML = row;
  for (let i = 0; i < data.length; i++) {
    row = `<tr>
              <td>${data[i].date}</td>
              <td>${data[i].retailPrice}</td>
              <td>${data[i].wholesalePrice}</td>
              <td>${data[i].weekHigh}</td>
              <td>${data[i].weekLow}</td>
            </tr>`;
    table.innerHTML += row;
  }

}
const cropNameContainer = document.getElementById("left-sidebar");

function addCrops() {
  navlinks.map((cropName) => {
    // console.log(cropName);
    const cropNameDiv = document.createElement("div");
    cropNameDiv.classList.add("cropName");
    // console.log(cropName.name);
    cropNameDiv.innerHTML = cropName.name;
    cropNameDiv.addEventListener("click", () => {
      let text = cropName.name;
      // console.log(text);
      document.getElementById("prod-name").innerHTML = text;
      document.getElementById(
        "prod-img"
      ).src = `Price Trend Images/${text}.jpg`;

      // let functionName = cropName.fname;
      console.log(cropName);
      changeTableData(cropName);
    });
    // console.log(cropNameDiv);
    cropNameContainer.appendChild(cropNameDiv);
  });
}
