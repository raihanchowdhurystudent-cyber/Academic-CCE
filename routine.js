// Complete IIUC CCE Autumn 2026 Class Routine Data Structure

const routineData = {
    university: "International Islamic University Chittagong",
    department: "Department of Computer and Communication Engineering (CCE)",
    term: "Autumn – 2026",
    timings: {
        female: [
            { period: "1st", time: "08:20 – 09:10" },
            { period: "2nd", time: "09:10 – 10:00" },
            { period: "3rd", time: "10:00 – 10:50" },
            { period: "4th", time: "10:50 – 11:40" },
            { period: "5th", time: "11:40 – 12:30" },
            { period: "6th", time: "12:30 – 01:20" }
        ],
        male: [
            { period: "1st", time: "10:40 – 11:30" },
            { period: "2nd", time: "11:30 – 12:20" },
            { period: "3rd", time: "12:20 – 01:10" },
            { period: "Break", time: "01:10 – 01:50 (Prayer & Lunch)" },
            { period: "4th", time: "01:50 – 02:40" },
            { period: "5th", time: "02:40 – 03:30" },
            { period: "6th", time: "03:30 – 04:20" }
        ]
    },
    schedules: {
        female: {
            "1F": {
                room: "502, Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-1106", teacher: "MKH", lab: "Software Development Lab" },
                        { course: "CCE-1106", teacher: "MKH", lab: "Software Development Lab" },
                        { course: "CCE-1106", teacher: "MKH", lab: "Software Development Lab" },
                        { course: "Math-1101", teacher: "AH", },
                        { course: "Math-1101", teacher: "AH", },
                        null
                    ],
                    Sunday: [
                        { course: "CCE-1104", teacher: "JN", lab: "EEE Lab" },
                        { course: "CCE-1104", teacher: "JN", lab: "EEE Lab" },
                        { course: "CCE-1104", teacher: "JN", lab: "EEE Lab" },
                        { course: "GEEL-1106", teacher: "MKS", },
                        { course: "MATH-1101", teacher: "AH", },
                        null
                    ],
                    Monday: [
                        { course: "GEEL-1106", teacher: "MKS", },
                        { course: "GEEL-1106", teacher: "MKS", },
                        { course: "CCE-1105", teacher: "MJH", },
                        { course: "PHY-1101", teacher: "HM", },
                        { course: "PHY-1101", teacher: "HM", },
                        { course: "CCE-1103", teacher: "JN", }
                    ],
                    Tuesday: [
                        { course: "CCE-1102", teacher: "NS", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-1102", teacher: "NS", lab: "B.Com & Simulation Lab" },
                        null,
                        { course: "GEEM-1101", teacher: "ARN", },
                        null,
                        null
                    ],
                    Wednesday: [
                        { course: "PHY-1101", teacher: "HM", },
                        { course: "GEEM-1101", teacher: "ARN", },
                        { course: "CCE-1105", teacher: "MJH", },
                        { course: "CCE-1105", teacher: "MJH", },
                        { course: "CCE-1103", teacher: "JN", },
                        { course: "CCE-1103", teacher: "JN", }
                    ]
                }
            },
            "2F": {
                room: "304, Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-1207", teacher: "AJ" },
                        { course: "CCE-1207", teacher: "AJ" },
                        { course: "MATH-2401", teacher: "AH" },
                        null,
                        null,
                        { course: "MDP-1201", teacher: "Adj_RA" }
                    ],
                    Sunday: [
                        { course: "CCE-1206", teacher: "FA", lab: "Software Development Lab" },
                        { course: "CCE-1206", teacher: "FA", lab: "Software Development Lab" },
                        { course: "CCE-1206", teacher: "FA", lab: "Software Development Lab" },
                        { course: "CCE-1209", teacher: "JN" },
                        { course: "GEED-1201", teacher: "NI-IS" },
                        { course: "PHY-1202", teacher: "HM" }
                    ],
                    Monday: [
                        { course: "PHY-1202", teacher: "HM", lab: "EEE Lab" },
                        { course: "PHY-1202", teacher: "HM", lab: "EEE Lab" },
                        { course: "PHY-1202", teacher: "HM", lab: "EEE Lab" },
                        null,
                        { course: "GEED-1201", teacher: "NI-IS" },
                        { course: "CCE-1207", teacher: "AJ" }
                    ],
                    Tuesday: [
                        { course: "PHY-1201", teacher: "HM" },
                        { course: "PHY-1201", teacher: "HM" },
                        { course: "MATH-2401", teacher: "AH" },
                        { course: "MATH-2401", teacher: "AH" },
                        { course: "CCE-1209", teacher: "JN" },
                        { course: "CCE-1209", teacher: "JN" }
                    ],
                    Wednesday: [
                        { course: "CCE-1210", teacher: "JN", lab: "EEE Lab" },
                        { course: "CCE-1210", teacher: "JN", lab: "EEE Lab" },
                        { course: "CCE-1210", teacher: "JN", lab: "EEE Lab" },
                        { course: "CCE-1208", teacher: "AJ", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-1208", teacher: "AJ", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-1208", teacher: "AJ", lab: "B.Com & Simulation Lab" }
                    ]
                }
            },
            "3F": {
                room: "202, Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "MATH-2301", teacher: "DMGH" },
                        { course: "MATH-2301", teacher: "DMGH" },
                        { course: "MATH-2301", teacher: "DMGH" },
                        { course: "GEED-2302", teacher: "MJI" },
                        null,
                        null
                    ],
                    Sunday: [
                        { course: "CHEM-2301", teacher: "DMS", lab: "Chemistry Lab(FSE)" },
                        { course: "CHEM-2301", teacher: "DMS", lab: "Chemistry Lab(FSE)" },
                        { course: "CCE-2307", teacher: "AA" },
                        null,
                        null,
                        { course: "CCE-2307", teacher: "AA" }
                    ],
                    Monday: [
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "MDP-2302", teacher: "SAB" },
                        { course: "CCE-2305", teacher: "IUF" },
                        { course: "CCE-2305", teacher: "IUF" },
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-2302", teacher: "AJ", lab: "Programming Lab" },
                        { course: "CCE-2302", teacher: "AJ", lab: "Programming Lab" },
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "CHEM-2301", teacher: "DMS" },
                        { course: "CHEM-2301", teacher: "DMS" },
                        { course: "CHEM-2301", teacher: "DMS" }
                    ],
                    Wednesday: [
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        { course: "GEED-2302", teacher: "MJI" },
                        null,
                        null
                    ]
                }
            },
            "4F": {
                room: "504, Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "STAT-2401", teacher: "MSH" },
                        { course: "STAT-2401", teacher: "MSH" },
                        { course: "CCE-2407", teacher: "JN" },
                        { course: "CCE-2407", teacher: "JN" },
                        { course: "CCE-2407", teacher: "JN" },
                        { course: "MATH-2401", teacher: "AH" }
                    ],
                    Sunday: [
                        { course: "CCE-2408", teacher: "NCS", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-2408", teacher: "NCS", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-2408", teacher: "NCS", lab: "Telecom Lab (ETE)" },
                        { course: "GEBL-2401", teacher: "adj.B/SUJ" },
                        { course: "CCE-2411", teacher: "JN" },
                        { course: "CCE-2411", teacher: "JN" }
                    ],
                    Monday: [
                        null,
                        { course: "GEBL-2401", teacher: "adj.B/SUJ" },
                        { course: "CCE-2401", teacher: "MIK" },
                        { course: "CCE-2401", teacher: "MIK" },
                        null,
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-2412", teacher: "JN", lab: "EEE Lab" },
                        { course: "CCE-2412", teacher: "JN", lab: "EEE Lab" },
                        { course: "CCE-2412", teacher: "JN", lab: "EEE Lab" },
                        null,
                        null,
                        null
                    ],
                    Wednesday: [
                        { course: "CCE-2406", teacher: "FA", lab: "AI & ML Lab" },
                        { course: "CCE-2406", teacher: "FA", lab: "AI & ML Lab" },
                        { course: "CCE-2406", teacher: "FA", lab: "AI & ML Lab" },
                        { course: "CCE-2411", teacher: "JN" },
                        { course: "MATH-2401", teacher: "AH" },
                        { course: "MATH-2401", teacher: "AH" }
                    ]
                }
            },
            "5F": {
                room: "Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-3511", teacher: "DMJI" },
                        { course: "CCE-3511", teacher: "DMJI" },
                        { course: "CCE-3509", teacher: "ANS" },
                        { course: "CCE-3501", teacher: "NM" },
                        { course: "CCE-3501", teacher: "NM" },
                        { course: "MDP-3503", teacher: "JN" }
                    ],
                    Sunday: [
                        { course: "CCE-3506 / CCE-3508", teacher: "AJ / ARAM", lab: "B.Com & Simulation Lab (Gr-A) / IOT Lab (Gr-B)" },
                        { course: "CCE-3506 / CCE-3508", teacher: "AJ / ARAM", lab: "B.Com & Simulation Lab (Gr-A) / IOT Lab (Gr-B)" },
                        { course: "CCE-3509", teacher: "ANS" },
                        null,
                        { course: "ACC-3501", teacher: "TS" },
                        { course: "ACC-3501", teacher: "TS" }
                    ],
                    Monday: [
                        null,
                        { course: "URED-3503", teacher: "MJI" },
                        { course: "CCE-3505", teacher: "AJ" },
                        { course: "CCE-3505", teacher: "AJ" },
                        { course: "CCE-3503", teacher: "NCS" },
                        { course: "CCE-3503", teacher: "NCS" }
                    ],
                    Tuesday: [
                        { course: "CCE-3502", teacher: "NM", lab: "AI & ML Lab" },
                        { course: "CCE-3502", teacher: "NM", lab: "AI & ML Lab" },
                        { course: "CCE-3505", teacher: "AJ" },
                        { course: "CCE-3507", teacher: "ARAM" },
                        { course: "CCE-3507", teacher: "ARAM" },
                        null
                    ],
                    Wednesday: [
                        { course: "CCE-3506 / CCE-3508", teacher: "AJ / ARAM", lab: "B.Com & Simulation Lab (Gr-B) / Programming Lab (Gr-A)" },
                        { course: "CCE-3506 / CCE-3508", teacher: "AJ / ARAM", lab: "B.Com & Simulation Lab (Gr-B) / Programming Lab (Gr-A)" },
                        null,
                        { course: "CCE-3509", teacher: "ANS" },
                        { course: "URED-3503", teacher: "MJI" },
                        null
                    ]
                }
            },
            "6F": {
                room: "Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-3602", teacher: "DMSI", lab: "B.Comp.&.Simu Lab" },
                        { course: "CCE-3602", teacher: "DMSI", lab: "B.Comp.&.Simu Lab" },
                        { course: "CCE-3602", teacher: "DMSI", lab: "B.Comp.&.Simu Lab" },
                        { course: "CCE-3606", teacher: "WBA", lab: "Software Development Lab" },
                        { course: "CCE-3606", teacher: "WBA", lab: "Software Development Lab" },
                        { course: "CCE-3606", teacher: "WBA", lab: "Software Development Lab" }
                    ],
                    Sunday: [
                        null,
                        { course: "CCE-3601", teacher: "DMSI" },
                        { course: "CCE-3616", teacher: "DMS" },
                        { course: "CCE-3611", teacher: "HJ" },
                        { course: "CCE-3611", teacher: "HJ" },
                        null
                    ],
                    Monday: [
                        { course: "CCE_3612", teacher: "HJ", lab: "Telecom Lab (ETE)" },
                        { course: "CCE_3612", teacher: "HJ", lab: "Telecom Lab (ETE)" },
                        { course: "CCE_3612", teacher: "HJ", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-3616", teacher: "DMS" },
                        { course: "GEHE-3613", teacher: "Adj/His DABS" },
                        { course: "GEHE-3613", teacher: "Adj/His DABS" }
                    ],
                    Tuesday: [
                        { course: "CCE-3609", teacher: "ARAM", lab: "Software Development lab" },
                        { course: "CCE-3609", teacher: "ARAM", lab: "Software Development lab" },
                        { course: "CCE-3609", teacher: "ARAM", lab: "Software Development lab" },
                        { course: "CCE-3614", teacher: "NCS", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-3614", teacher: "NCS", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-3614", teacher: "NCS", lab: "B.Com & Simulation Lab" }
                    ],
                    Wednesday: [
                        { course: "CCE-3612", teacher: "HJ", lab: "Telecom Lab (ETE) Group-B" },
                        { course: "CCE-3612", teacher: "HJ", lab: "Telecom Lab (ETE) Group-B" },
                        { course: "CCE-3612", teacher: "HJ", lab: "Telecom Lab (ETE) Group-B" },
                        { course: "CCE-3611", teacher: "HJ" },
                        null,
                        { course: "CCE-3613", teacher: "NCS" }
                    ]
                }
            },
            "7F": {
                room: "303, Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-4720", teacher: "SMI", lab: "Electronic Lab (ETE)" },
                        { course: "CCE-4720", teacher: "SMI", lab: "Electronic Lab (ETE)" },
                        { course: "CCE-4720", teacher: "SMI", lab: "Electronic Lab (ETE)" },
                        { course: "CCE-4708", teacher: "DMAH", lab: "B.Comp.&.Simu Lab" },
                        { course: "CCE-4708", teacher: "DMAH", lab: "B.Comp.&.Simu Lab" },
                        { course: "CCE-4708", teacher: "DMAH", lab: "B.Comp.&.Simu Lab" }
                    ],
                    Sunday: [
                        { course: "CCE-4706", teacher: "MI", lab: "AI & ML Lab" },
                        { course: "CCE-4706", teacher: "MI", lab: "AI & ML Lab" },
                        { course: "CCE-4706", teacher: "MI", lab: "AI & ML Lab" },
                        { course: "CCE-4830", teacher: "MR", lab: "Software Development Lab" },
                        { course: "CCE-4830", teacher: "MR", lab: "Software Development Lab" },
                        { course: "CCE-4701", teacher: "HJ" }
                    ],
                    Monday: [
                        { course: "CCE-3606", teacher: "AMMF", lab: "Software Development Lab" },
                        { course: "CCE-4707", teacher: "DMAH" },
                        { course: "CCE-4719", teacher: "SMI" },
                        { course: "CCE-4702", teacher: "HJ", lab: "Software Development Lab" },
                        { course: "CCE-4702", teacher: "HJ", lab: "Software Development Lab" },
                        { course: "CCE-4702", teacher: "HJ", lab: "Software Development Lab" }
                    ],
                    Tuesday: [
                        { course: "URIH-4701", teacher: "NTH" },
                        { course: "URIH-4701", teacher: "NTH" },
                        { course: "CCE-4705", teacher: "MI" },
                        { course: "CCE-4705", teacher: "MI" },
                        { course: "CCE-4701", teacher: "HJ" },
                        { course: "CCE-4701", teacher: "HJ" }
                    ],
                    Wednesday: [
                        { course: "ECON-4701", teacher: "TS" },
                        { course: "ECON-4701", teacher: "TS" },
                        { course: "CCE-4711", teacher: "N/A" },
                        { course: "CCE-4711", teacher: "N/A" },
                        { course: "CCE-4829", teacher: "MR" },
                        { course: "CCE-4829", teacher: "MR" }
                    ]
                }
            },
            "8F": {
                room: "204, Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-4808", teacher: "ZUA", lab: "IOT Lab" },
                        { course: "CCE-4808", teacher: "ZUA", lab: "IOT Lab" },
                        { course: "CCE-4808", teacher: "ZUA", lab: "IOT Lab" },
                        null,
                        { course: "MGT-4701", teacher: "DJ" },
                        { course: "MGT-4701", teacher: "DJ" }
                    ],
                    Sunday: [
                        { course: "CCE-4804", teacher: "AAM", lab: "Programming Lab" },
                        { course: "CCE-4804", teacher: "AAM", lab: "Programming Lab" },
                        null,
                        { course: "CCE-4805", teacher: "ANS" },
                        { course: "CCE-4802", teacher: "MIK", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-4802", teacher: "MIK", lab: "B.Com & Simulation Lab" }
                    ],
                    Monday: [
                        { course: "CCE-4806", teacher: "ANS", lab: "Programming Lab" },
                        { course: "CCE-4806", teacher: "ANS", lab: "Programming Lab" },
                        { course: "CCE-4805", teacher: "ANS" },
                        null, null, null
                    ],
                    Tuesday: [
                        { course: "LAW-4821", teacher: "MMM" },
                        { course: "LAW-4821", teacher: "MMM" },
                        null,
                        null,
                        { course: "CCE-4803", teacher: "AAM" },
                        { course: "CCE-4803", teacher: "AAM" }
                    ],
                    Wednesday: [
                        { course: "CCE-4801", teacher: "N/A" },
                        { course: "CCE-4801", teacher: "N/A" },
                        { course: "CCE-4825", teacher: "MZH" },
                        { course: "CCE-4825", teacher: "MZH" },
                        { course: "CCE-4826", teacher: "MZH", lab: "Software Development Lab" },
                        { course: "CCE-4826", teacher: "MZH", lab: "Software Development Lab" }
                    ]
                }
            }
        },
        male: {
            "1AM": {
                room: "702, Academic Building 5 (Male Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-1104", teacher: "IUF", lab: "EEE Lab" },
                        { course: "CCE-1104", teacher: "IUF", lab: "EEE Lab" },
                        { course: "CCE-1104", teacher: "IUF", lab: "EEE Lab" },
                        null,
                        null,
                        null
                    ],
                    Sunday: [
                        { course: "CCE-1103", teacher: "IUF" },
                        { course: "CCE-1105", teacher: "MJH" },
                        { course: "CCE-1105", teacher: "MJH" },
                        { course: "MATH-1101", teacher: "AH" },
                        { course: "MATH-1101", teacher: "AH" },
                        { course: "GEEL-1106", teacher: "TI" }
                    ],
                    Monday: [
                        null,
                        { course: "GEEL-1106", teacher: "TI" },
                        { course: "GEEM-1101", teacher: "SIC" },
                        { course: "CCE-1106", teacher: "MJH", lab: "Programming Lab" },
                        { course: "CCE-1106", teacher: "MJH", lab: "Programming Lab" },
                        { course: "CCE-1106", teacher: "MJH", lab: "Programming Lab" }
                    ],
                    Tuesday: [
                        { course: "CCE-1103", teacher: "IUF" },
                        { course: "CCE-1103", teacher: "IUF" },
                        null,
                        null,
                        { course: "CCE-1105", teacher: "MJH" },
                        { course: "CCE-1102", teacher: "NS", lab: "Programming Lab" },
                        { course: "CCE-1102", teacher: "NS", lab: "Programming Lab" }
                    ],
                    Wednesday: [
                        { course: "PHY-1101", teacher: "HM" },
                        { course: "GEEL-1106", teacher: "TI" },
                        { course: "GEEM-1101", teacher: "SIC" },
                        { course: "PHY-1101", teacher: "HM" },
                        { course: "PHY-1101", teacher: "HM" },
                        { course: "MATH-1101", teacher: "AH" }
                    ]
                }
            },
            "1BM": {
                room: "703, Academic Building 5 (Male Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-1106", teacher: "MJH", lab: "IOT Lab" },
                        { course: "CCE-1106", teacher: "MJH", lab: "IOT Lab" },
                        { course: "CCE-1106", teacher: "MJH", lab: "IOT Lab" },
                        { course: "CCE-1103", teacher: "IUF" },
                        { course: "CCE-1103", teacher: "IUF" },
                        null
                    ],
                    Sunday: [
                        { course: "CCE-1105", teacher: "MJH" },
                        null,
                        null,
                        { course: "CCE-1104", teacher: "IUF", lab: "EEE Lab" },
                        { course: "CCE-1104", teacher: "IUF", lab: "EEE Lab" },
                        { course: "CCE-1104", teacher: "IUF", lab: "EEE Lab" }
                    ],
                    Monday: [
                        { course: "CCE-1105", teacher: "MJH" },
                        { course: "CCE-1105", teacher: "MJH" },
                        { course: "GEEL-1106", teacher: "TI" },
                        { course: "PHY-1101", teacher: "HM" },
                        { course: "PHY-1101", teacher: "HM" },
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-1102", teacher: "NS", lab: "Programming Lab" },
                        { course: "CCE-1102", teacher: "NS", lab: "Programming Lab" },
                        { course: "MATH-1101", teacher: "AH" },
                        { course: "GEEL-1106", teacher: "TI" },
                        { course: "GEEL-1106", teacher: "TI" },
                        null
                    ],
                    Wednesday: [
                        { course: "GEEM-1101", teacher: "MOF" },
                        { course: "GEEM-1101", teacher: "MOF" },
                        { course: "CCE-1103", teacher: "IUF" },
                        { course: "MATH-1101", teacher: "AH" },
                        { course: "MATH-1101", teacher: "AH" },
                        { course: "PHY-1101", teacher: "HM" }
                    ]
                }
            },
            "2AM": {
                room: "705, Academic Building 5 (Male Zone)",
                routine: {
                    Saturday: [
                        { course: "MDP-1201", teacher: "MMR" },
                        { course: "PHY-1201", teacher: "HM" },
                        { course: "PHY-1201", teacher: "HM" },
                        { course: "CCE-1208", teacher: "MJH", lab: "Programming Lab" },
                        { course: "CCE-1208", teacher: "MJH", lab: "Programming Lab" },
                        { course: "CCE-1208", teacher: "MJH", lab: "Programming Lab" },
                    ],
                    Sunday: [
                        null,
                        { course: "CCE-1209", teacher: "IUF" },
                        { course: "CCE-1209", teacher: "IUF" },
                        { course: "CCE-1207", teacher: "MJH" },
                        null,
                        { course: "MATH-1201", teacher: "AH", },
                    ],
                    Monday: [
                        { course: "CCE-1206", teacher: "ANS", lab: "Programming Lab" },
                        { course: "CCE-1206", teacher: "ANS", lab: "Programming Lab" },
                        { course: "CCE-1206", teacher: "ANS", lab: "Programming Lab" },
                        { course: "MATH-1201", teacher: "AH" },
                        { course: "MATH-1201", teacher: "AH" },
                        null
                    ],
                    Tuesday: [
                        { course: "PHY-1202", teacher: "HM", lab: "EEE Lab" },
                        { course: "PHY-1202", teacher: "HM", lab: "EEE Lab" },
                        { course: "PHY-1202", teacher: "HM", lab: "EEE Lab" },
                        { course: "GEED-1201", teacher: "AI" },
                        { course: "CCE-1207", teacher: "MJH" },
                        { course: "CCE-1207", teacher: "MJH" }
                    ],
                    Wednesday: [
                        { course: "CCE-1209", teacher: "IUF" },
                        { course: "GEED-1201", teacher: "AI" },
                        { course: "PHY-1201", teacher: "HM" },
                        { course: "CCE-1210", teacher: "IUF", lab: "EEE Lab" },
                        { course: "CCE-1210", teacher: "IUF", lab: "EEE Lab" },
                        { course: "CCE-1210", teacher: "IUF", lab: "EEE Lab" }
                    ]
                }
            },
            "3AM": {
                room: "306, Academic Building 5 (Male Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "MDP-2302", teacher: "MU" },
                        { course: "MATH-2301", teacher: "DMGH" },
                        { course: "MATH-2301", teacher: "DMGH" },
                        { course: "MATH-2301", teacher: "DMGH" }
                    ],
                    Sunday: [
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "CCE-2302", teacher: "AAM", lab: "IOT Lab" },
                        { course: "CCE-2302", teacher: "AAM", lab: "IOT Lab" },
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" }
                    ],
                    Monday: [
                        null,
                        { course: "CHEM-2302", teacher: "DMS", lab: "Chemistry Lab (FSE)" },
                        { course: "CHEM-2302", teacher: "DMS", lab: "Chemistry Lab (FSE)" },
                        { course: "CHEM-2301", teacher: "DMS" },
                        { course: "CHEM-2301", teacher: "DMS" },
                        { course: "CHEM-2301", teacher: "DMS" }
                    ],
                    Tuesday: [
                        { course: "CCE-2305", teacher: "MAA" },
                        { course: "CCE-2305", teacher: "MAA" },
                        { course: "GEED-2301", teacher: "AI" },
                        null,
                        null,
                        null
                    ],
                    Wednesday: [
                        { course: "GEED-2301", teacher: "AI" },
                        { course: "CCE-2307", teacher: "MIK" },
                        { course: "CCE-2307", teacher: "MIK" },
                        null,
                        null,
                        null
                    ]
                }
            },
            "3BM": {
                room: "308, Academic Building 5 (Male Zone)",
                routine: {
                    Saturday: [
                        { course: "MATH-2301", teacher: "DMGH" },
                        { course: "MATH-2301", teacher: "DMGH" },
                        { course: "MATH-2301", teacher: "DMGH" },
                        { course: "CCE-2307", teacher: "AA" },
                        { course: "CCE-2307", teacher: "AA" },
                        { course: "MDP-2305", teaher: "SA" }
                    ],
                    Sunday: [
                        { course: "CHEM-2301", teacher: "DMS" },
                        { course: "CHEM-2301", teacher: "DMS" },
                        { course: "CHEM-2301", teacher: "DMS" },
                        { course: "CHEM-2302", teacher: "DMS", lab: "Chemistry Lab (FSE)" },
                        { course: "CHEM-2302", teacher: "DMS", lab: "Chemistry Lab (FSE)" },
                        { course: "CHEM-2302", teacher: "DMS", lab: "Chemistry Lab (FSE)" }
                    ],
                    Monday: [
                        null,
                        null,
                        null,
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "CCE-2301", teacher: "AAM" },
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-2310", teacher: "MR", lab: "IoT Lab" },
                        { course: "CCE-2310", teacher: "MR", lab: "IoT Lab" },
                        { course: "CCE-2310", teacher: "MR", lab: "IoT Lab" },
                        { course: "MDP-2305", teacher: "MAA" },
                        { course: "MDP-2305", teacher: "MAA" },
                        { course: "GEED-2302", teacher: "AI" }
                    ],
                    Wednesday: [
                        { course: "CCE-2302", teacher: "AAM", lab: "IOT Lab" },
                        { course: "CCE-2302", teacher: "AAM", lab: "IOT Lab" },
                        { course: "GEED-2302", teacher: "AI" },
                        null,
                        null,
                        null
                    ]
                }
            },
            "4AM": {
                room: "706, Academic Building 5 (Male Zone)",
                routine: {
                    Saturday: [
                        null,
                        { course: "STAT-2401", teacher: "MSH" },
                        { course: "STAT-2401", teacher: "MSH" },
                        { course: "MATH-2401", teacher: "AH" },
                        null,
                        null
                    ],
                    Sunday: [
                        { course: "CCE-2408", teacher: "NCS", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-2408", teacher: "NCS", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-2408", teacher: "NCS", lab: "Telecom Lab (ETE)" },
                        null,
                        null,
                        null
                    ],
                    Monday: [
                        { course: "MATH-2401", teacher: "AH" },
                        { course: "MATH-2401", teacher: "AH" },
                        { course: "GEBL-2401", teacher: "MHI" },
                        { course: "CCE-2401", teacher: "MIK" },
                        { course: "CCE-2401", teacher: "MIK" },
                        { course: "CCE-2407", teacher: "NCS" }
                    ],
                    Tuesday: [
                        { course: "CCE-2411", teacher: "RA" },
                        { course: "GEBL-2401", teacher: "MHI" },
                        { course: "CCE-2411", teacher: "RA" },
                        { course: "CCE-2412", teacher: "RA", lab: "EEE Lab" },
                        { course: "CCE-2412", teacher: "RA", lab: "EEE Lab" },
                        { course: "CCE-2412", teacher: "RA", lab: "EEE Lab" }
                    ],
                    Wednesday: [
                        { course: "CCE-2407", teacher: "NCS" },
                        { course: "CCE-2407", teacher: "NCS" },
                        { course: "CCE-2411", teacher: "RA" },
                        { course: "CCE-2406", teacher: "MR", lab: "AI & ML Lab" },
                        { course: "CCE-2406", teacher: "MR", lab: "AI & ML Lab" },
                        { course: "CCE-2406", teacher: "MR", lab: "AI & ML Lab" }
                    ]
                }
            },
            "5AM": {
                room: "607, Academic Building 5 (Male Zone)",
                routine: {
                    Saturday: [
                        { course: "ACC-3501", teacher: "DSA" },
                        { course: "ACC-3501", teacher: "DSA" },
                        { course: "CCE-3509", teacher: "ANS" },
                        null,
                        null,
                        null
                    ],
                    Sunday: [
                        { course: "URED-3503", teacher: "MMA" },
                        { course: "CCE-3505", teacher: "MHS" },
                        { course: "CCE-3505", teacher: "MHS" },
                        { course: "CCE-3502", teacher: "NH", lab: "Programming Lab" },
                        { course: "CCE-3502", teacher: "NH", lab: "Programming Lab" },
                        { course: "MDP-3503", teacher: "RA" }
                    ],
                    Monday: [
                        { course: "CCE-3501", teacher: "NH" },
                        { course: "CCE-3501", teacher: "NH" },
                        { course: "CCE-3505", teacher: "MHS" },
                        { course: "CCE-3508", teacher: "ARAM", lab: "IOT Lab" },
                        { course: "CCE-3508", teacher: "ARAM", lab: "IOT Lab" },
                        null
                    ],
                    Tuesday: [
                        { course: "URED-3503", teacher: "MMA" },
                        { course: "CCE-3509", teacher: "ANS" },
                        { course: "CCE-3509", teacher: "ANS" },
                        { course: "CCE-3507", teacher: "ARAM" },
                        { course: "CCE-3507", teacher: "ARAM" },
                        null
                    ],
                    Wednesday: [
                        { course: "CCE-3506", teacher: "MHS", lab: "Programming lab" },
                        { course: "CCE-3506", teacher: "MHS", lab: "Programming lab" },
                        { course: "CCE-3511", teacher: "DMJI" },
                        { course: "CCE-3511", teacher: "DMJI" },
                        { course: "CCE-3503", teacher: "NCS" },
                        { course: "CCE-3503", teacher: "NCS" }
                    ]
                }
            },
            "6AM": {
                room: "608, Academic Building 5 (Male Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-3601", teacher: "DMSI", lab: "AI & ML Lab" },
                        { course: "CCE-3602", teacher: "DMSI", lab: "AI & ML Lab" },
                        { course: "CCE-3602", teacher: "DMSI", lab: "AI & ML Lab" },
                        { course: "CCE-3606", teacher: "WBA", lab: "IOT Lab" },
                        { course: "CCE-3606", teacher: "WBA", lab: "IOT Lab" },
                        { course: "CCE-3606", teacher: "WBA", lab: "IOT Lab" }
                    ],
                    Sunday: [
                        { course: "CCE-3601", teacher: "DMSI" },
                        { course: "URED-3201", teacher: "MMA" },
                        { course: "GEHE-3601", teacher: "Adj DABS" },
                        { course: "CCE-3613", teacher: "NCS" },
                        { course: "CCE-3613", teacher: "NCS" },
                        null
                    ],
                    Monday: [
                        { course: "CCE-3609", teacher: "ARAM" },
                        { course: "CCE-3611", teacher: "MIK" },
                        { course: "CCE-3611", teacher: "MIK" },
                        { course: "CCE-3614", teacher: "NCS", lab: "AI & ML Lab" },
                        { course: "CCE-3614", teacher: "NCS", lab: "AI & ML Lab" },
                        { course: "GEHE-3601", teacher: "Adj DABS" }
                    ],
                    Tuesday: [
                        { course: "CCE-3612", teacher: "MIK", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-3612", teacher: "MIK", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-3612", teacher: "MIK", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-3616", teacher: "DMS" },
                        { course: "CCE-3616", teacher: "DMS" },
                        { course: "URED-3201", teacher: "MMA" }
                    ],
                    Wednesday: [
                        { course: "CCE-3611", teacher: "MIK" },
                        { course: "CCE-3609", teacher: "ARAM" },
                        { course: "CCE-3609", teacher: "ARAM" },
                        null,
                        null,
                        null
                    ]
                }
            },
            "7AM": {
                room: "309, Academic Building 5 (Male Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-4719", teacher: "SMI", lab: "Electronic Lab (ETE)" },
                        { course: "CCE-4720", teacher: "SMI", lab: "Electronic Lab (ETE)" },
                        { course: "CCE-4720", teacher: "SMI", lab: "Electronic Lab (ETE)" },
                        { course: "CCE-4708", teacher: "DMAH", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-4708", teacher: "DMAH", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-4708", teacher: "DMAH", lab: "Telecom Lab (ETE)" }
                    ],
                    Sunday: [
                        { course: "CCE-4706", teacher: "MI", lab: "AI & ML Lab" },
                        { course: "CCE-4706", teacher: "MI", lab: "AI & ML Lab" },
                        { course: "CCE-4705", teacher: "MI" },
                        { course: "CCE-4705", teacher: "MI" },
                        { course: "CCE-4705", teacher: "MI" },
                        { course: "CCE-4707", teacher: "DMAH" }
                    ],
                    Monday: [
                        { course: "CCE-4830", teacher: "MR", lab: "IoT Lab" },
                        { course: "CCE-4830", teacher: "MR", lab: "IoT Lab" },
                        { course: "URIH-4701", teacher: "NTH" },
                        { course: "URIH-4701", teacher: "NTH" },
                        { course: "CCE-4829", teacher: "MR" },
                        { course: "CCE-4829", teacher: "MR" }
                    ],
                    Tuesday: [
                        null,
                        { course: "ECON-4701", teacher: "DSA" },
                        { course: "ECON-4701", teacher: "DSA" },
                        { course: "CCE-4702", teacher: "HJ", lab: "AI & ML Lab" },
                        { course: "CCE-4702", teacher: "HJ", lab: "AI & ML Lab" },
                        { course: "CCE-4702", teacher: "HJ", lab: "AI & ML Lab" }
                    ],
                    Wednesday: [
                        { course: "CCE-4711", teacher: "DMJI" },
                        { course: "CCE-4711", teacher: "DMJI" },
                        { course: "CCE-4701", teacher: "HJ" },
                        { course: "CCE-4701", teacher: "HJ" },
                        { course: "CCE-4701", teacher: "HJ" },
                        { course: "CCE-4719", teacher: "SMI" }
                    ]
                }
            },
            "8AM": {
                room: "309, Academic Building 5 (Male Zone)",
                routine: {
                    Saturday: [
                        { course: "MGT-4701", teacher: "DJ" },
                        { course: "MGT-4701", teacher: "DJ" },
                        { course: "CCE-4805", teacher: "ANS" },
                        { course: "CCE-4808", teacher: "ZUA", lab: "AI & ML Lab" },
                        { course: "CCE-4808", teacher: "ZUA", lab: "AI & ML Lab" },
                        { course: "CCE-4808", teacher: "ZUA", lab: "AI & ML Lab" }
                    ],
                    Sunday: [
                        { course: "CCE-4825", teacher: "MZH" },
                        { course: "CCE-4806", teacher: "ANS", lab: "Programming Lab" },
                        { course: "CCE-4806", teacher: "ANS", lab: "Programming Lab" },
                        { course: "CCE-4825", teacher: "MZH" },
                        { course: "CCE-4826", teacher: "MZH", lab: "AI & ML Lab" },
                        { course: "CCE-4826", teacher: "MZH", lab: "AI & ML Lab" }
                    ],
                    Monday: [
                        null,
                        { course: "CCE-4804", teacher: "AAM", lab: "AI & ML Lab" },
                        { course: "CCE-4804", teacher: "AAM", lab: "AI & ML Lab" },
                        { course: "CCE-4805", teacher: "ANS" },
                        null,
                        { course: "CCE-4803", teacher: "AAM" }
                    ],
                    Tuesday: [
                        { course: "CCE-4805", teacher: "ANS" },
                        null,
                        null,
                        { course: "CCE-4802", teacher: "MIK", lab: "IOT Lab" },
                        { course: "CCE-4802", teacher: "MIK", lab: "IOT Lab" },
                        null
                    ],
                    Wednesday: [
                        { course: "LAW-4821", teacher: "MMM" },
                        { course: "LAW-4821", teacher: "MMM" },
                        null,
                        null,
                        { course: "CCE-4801", teacher: "MIM" },
                        { course: "CCE-4801", teacher: "MIM" }
                    ]
                }
            }
        }
    }
};

/**
 * Helper function to retrieve a specific class section's routine
 * @param {string} gender - "female" or "male"
 * @param {string} section - Section name e.g., "1F", "2AM", "3BM", etc.
 */
function getRoutine(gender, section) {
    const normalizedGender = gender.toLowerCase();
    const scheduleGroup = routineData.schedules[normalizedGender];

    if (!scheduleGroup || !scheduleGroup[section]) {
        return `Routine not found for ${gender} section ${section}.`;
    }

    return {
        section: section,
        room: scheduleGroup[section].room,
        timings: routineData.timings[normalizedGender],
        routine: scheduleGroup[section].routine
    };
}

// --- Usage Example ---
console.log("=== 1F (Female 1st Semester) Routine ===");
console.log(getRoutine("female", "1F"));

console.log("\n=== 1AM (Male 1st Semester) Routine ===");
console.log(getRoutine("male", "1AM"));
