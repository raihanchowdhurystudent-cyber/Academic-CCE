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
        // ==================== FEMALE SECTIONS ====================
        female: {
            "1F": {
                room: "502, Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-1106", teacher: "MKH", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-1104", teacher: "JN", lab: "EEE Lab" },
                        { course: "GEEL-1106", teacher: "MKS" },
                        { course: "CCE-1102", teacher: "NS", lab: "B.Com & Simulation Lab" },
                        { course: "PHY-1101", teacher: "HM" },
                        null
                    ],
                    Sunday: [
                        { course: "CCE-1106", teacher: "MKH", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-1104", teacher: "JN", lab: "EEE Lab" },
                        { course: "GEEL-1106", teacher: "MKS" },
                        { course: "CCE-1102", teacher: "NS", lab: "B.Com & Simulation Lab" },
                        { course: "GEEM-1101", teacher: "ARN" },
                        null
                    ],
                    Monday: [
                        { course: "CCE-1106", teacher: "MKH", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-1104", teacher: "JN", lab: "EEE Lab" },
                        { course: "CCE-1105", teacher: "MJH" },
                        null,
                        { course: "CCE-1105", teacher: "MJH" },
                        { course: "Math-1101", teacher: "AH" }
                    ],
                    Tuesday: [
                        { course: "GEEL-1106", teacher: "MKS" },
                        { course: "PHY-1101", teacher: "HM" },
                        { course: "GEEM-1101", teacher: "ARN" },
                        { course: "CCE-1105", teacher: "MJH" },
                        { course: "Math-1101", teacher: "AH" },
                        null
                    ],
                    Wednesday: [
                        { course: "MATH-1101", teacher: "AH" },
                        { course: "PHY-1101", teacher: "HM" },
                        null,
                        { course: "CCE-1103", teacher: "JN" },
                        null,
                        { course: "CCE-1103", teacher: "JN" }
                    ]
                }
            },

            "2F": {
                room: "304, Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-1207", teacher: "AJ" },
                        { course: "CCE-1206", teacher: "FA", lab: "Programming Lab" },
                        { course: "PHY-1202", teacher: "HM", lab: "EEE Lab" },
                        { course: "PHY-1201", teacher: "HM" },
                        { course: "CCE-1210", teacher: "JN", lab: "EEE Lab" },
                        null
                    ],
                    Sunday: [
                        { course: "CCE-1207", teacher: "AJ" },
                        { course: "CCE-1206", teacher: "FA", lab: "Programming Lab" },
                        { course: "PHY-1202", teacher: "HM", lab: "EEE Lab" },
                        { course: "PHY-1201", teacher: "HM" },
                        { course: "CCE-1210", teacher: "JN", lab: "EEE Lab" },
                        { course: "MATH-2401", teacher: "AH" }
                    ],
                    Monday: [
                        { course: "CCE-1206", teacher: "FA", lab: "Programming Lab" },
                        { course: "PHY-1202", teacher: "HM", lab: "EEE Lab" },
                        { course: "MATH-2401", teacher: "AH" },
                        { course: "CCE-1210", teacher: "JN", lab: "EEE Lab" },
                        null,
                        { course: "CCE-1209", teacher: "JN" }
                    ],
                    Tuesday: [
                        null,
                        { course: "MATH-2401", teacher: "AH" },
                        { course: "CCE-1208", teacher: "AJ", lab: "B.Com & Simulation Lab" },
                        null,
                        { course: "GEED-1201", teacher: "NI-IS" },
                        { course: "GEED-1201", teacher: "NI-IS" }
                    ],
                    Wednesday: [
                        { course: "CCE-1209", teacher: "JN" },
                        { course: "CCE-1208", teacher: "AJ", lab: "B.Com & Simulation Lab" },
                        { course: "MDP-1201", teacher: "Adj_RA" },
                        { course: "PHY-1202", teacher: "HM" },
                        { course: "CCE-1207", teacher: "AJ" },
                        { course: "CCE-1209", teacher: "JN" }
                    ]
                }
            },

            "3F": {
                room: "202, Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "MATH-2301", teacher: "DMGH" },
                        { course: "CHEM-2301", teacher: "DMS", lab: "Chemistry Lab (FSE)" },
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "CCE-2302", teacher: "AJ", lab: "Programming Lab" },
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        null
                    ],
                    Sunday: [
                        { course: "MATH-2301", teacher: "DMGH" },
                        { course: "CHEM-2301", teacher: "DMS", lab: "Chemistry Lab (FSE)" },
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "CCE-2302", teacher: "AJ", lab: "Programming Lab" },
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        null
                    ],
                    Monday: [
                        { course: "MATH-2301", teacher: "DMGH" },
                        { course: "CCE-2307", teacher: "AA" },
                        { course: "MDP-2302", teacher: "SAB" },
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        null
                    ],
                    Tuesday: [
                        { course: "GEED-2302", teacher: "MJI" },
                        { course: "CCE-2305", teacher: "IUF" },
                        { course: "CHEM-2301", teacher: "DMS" },
                        { course: "GEED-2302", teacher: "MJI" },
                        null,
                        null
                    ],
                    Wednesday: [
                        { course: "CCE-2305", teacher: "IUF" },
                        { course: "CHEM-2301", teacher: "DMS" },
                        null,
                        null,
                        { course: "CCE-2307", teacher: "AA" },
                        { course: "CHEM-2301", teacher: "DMS" }
                    ]
                }
            },

            "4F": {
                room: "504, Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "STAT-2401", teacher: "MSH" },
                        { course: "CCE-2408", teacher: "NCS", lab: "Telecom Lab (ETE)" },
                        null,
                        { course: "CCE-2412", teacher: "JN", lab: "EEE Lab" },
                        { course: "CCE-2406", teacher: "FA", lab: "AI & ML Lab" },
                        null
                    ],
                    Sunday: [
                        { course: "STAT-2401", teacher: "MSH" },
                        { course: "CCE-2408", teacher: "NCS", lab: "Telecom Lab (ETE)" },
                        { course: "GEBL-2401", teacher: "adj.B/SUJ" },
                        { course: "CCE-2412", teacher: "JN", lab: "EEE Lab" },
                        { course: "CCE-2406", teacher: "FA", lab: "AI & ML Lab" },
                        null
                    ],
                    Monday: [
                        { course: "CCE-2411", teacher: "JN" },
                        { course: "CCE-2408", teacher: "NCS", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-2401", teacher: "MIK" },
                        { course: "CCE-2412", teacher: "JN", lab: "EEE Lab" },
                        { course: "CCE-2406", teacher: "FA", lab: "AI & ML Lab" },
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-2407", teacher: "JN" },
                        { course: "GEBL-2401", teacher: "adj.B/SUJ" },
                        { course: "CCE-2401", teacher: "MIK" },
                        null,
                        { course: "CCE-2407", teacher: "JN" },
                        { course: "CCE-2407", teacher: "JN" }
                    ],
                    Wednesday: [
                        { course: "CCE-2411", teacher: "JN" },
                        null,
                        null,
                        { course: "MATH-2401", teacher: "AH" },
                        { course: "MATH-2401", teacher: "AH" },
                        { course: "CCE-2411", teacher: "JN" }
                    ]
                }
            },

            "5F": {
                room: "Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-3602", teacher: "DMSI", lab: "IOT Lab" },
                        { course: "CCE-3602", teacher: "DMSI", lab: "IOT Lab" },
                        { course: "CCE-3601", teacher: "DMSI", lab: "IOT Lab" },
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
                        { course: "CCE-3612", teacher: "HJ", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-3612", teacher: "HJ", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-3612", teacher: "HJ", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-3616", teacher: "DMS" },
                        { course: "GEHE-3613", teacher: "Adj/His DABS" },
                        { course: "GEHE-3613", teacher: "Adj/His DABS" }
                    ],
                    Tuesday: [
                        { course: "CCE-3609", teacher: "ARAM", lab: "IOT Lab" },
                        { course: "CCE-3609", teacher: "ARAM", lab: "IOT Lab" },
                        { course: "CCE-3609", teacher: "ARAM", lab: "IOT Lab" },
                        { course: "CCE-3613", teacher: "NCS", lab: "B.Com & Simulation Lab" },
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
                        { course: "CCE-4706", teacher: "MI", lab: "AI & ML Lab" },
                        { course: "CCE-3606", teacher: "AMMF", lab: "AI & ML Lab" },
                        { course: "URIH-4701", teacher: "NTH" },
                        { course: "ECON-4701", teacher: "TS" },
                        null
                    ],
                    Sunday: [
                        { course: "CCE-4720", teacher: "SMI", lab: "Electronic Lab (ETE)" },
                        { course: "CCE-4706", teacher: "MI", lab: "AI & ML Lab" },
                        { course: "CCE-4707", teacher: "DMAH" },
                        { course: "URIH-4701", teacher: "NTH" },
                        { course: "ECON-4701", teacher: "TS" },
                        null
                    ],
                    Monday: [
                        { course: "CCE-4719", teacher: "SMI", lab: "Electronic Lab (ETE)" },
                        { course: "CCE-4705", teacher: "MI", lab: "AI & ML Lab" },
                        { course: "CCE-4719", teacher: "SMI" },
                        { course: "CCE-4705", teacher: "MI" },
                        { course: "CCE-4711", teacher: "N/A" },
                        { course: "CCE-4707", teacher: "DMAH", lab: "B.Comp.&.Simu Lab" }
                    ],
                    Tuesday: [
                        { course: "CCE-4830", teacher: "MR", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-4702", teacher: "HJ", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-4705", teacher: "MI" },
                        { course: "CCE-4711", teacher: "N/A" },
                        { course: "CCE-4708", teacher: "DMAH", lab: "B.Comp.&.Simu Lab" },
                        { course: "CCE-4830", teacher: "MR", lab: "B.Com & Simulation Lab" }
                    ],
                    Wednesday: [
                        { course: "CCE-4702", teacher: "HJ", lab: "B.Com & Simulation Lab" },
                        { course: "CCE-4701", teacher: "HJ" },
                        { course: "CCE-4829", teacher: "MR" },
                        { course: "CCE-4708", teacher: "DMAH", lab: "B.Comp.&.Simu Lab" },
                        { course: "CCE-4701", teacher: "HJ" },
                        { course: "CCE-4702", teacher: "HJ", lab: "B.Com & Simulation Lab" }
                    ]
                }
            },

            "8F": {
                room: "204, Academic Building 5 (Female Zone)",
                routine: {
                    Saturday: [
                        { course: "CCE-4808", teacher: "ZUA", lab: "Software Development Lab" },
                        { course: "CCE-4804", teacher: "AAM", lab: "Software Development Lab" },
                        { course: "CCE-4806", teacher: "ANS", lab: "B.Com & Simulation Lab" },
                        { course: "LAW-4821", teacher: "MMM" },
                        { course: "CCE-4801", teacher: "N/A" },
                        null
                    ],
                    Sunday: [
                        { course: "CCE-4808", teacher: "ZUA", lab: "Software Development Lab" },
                        { course: "CCE-4804", teacher: "AAM", lab: "Software Development Lab" },
                        { course: "CCE-4806", teacher: "ANS", lab: "B.Com & Simulation Lab" },
                        { course: "LAW-4821", teacher: "MMM" },
                        { course: "CCE-4801", teacher: "N/A" },
                        null
                    ],
                    Monday: [
                        { course: "CCE-4808", teacher: "ZUA", lab: "Software Development Lab" },
                        null,
                        { course: "CCE-4805", teacher: "ANS" },
                        null,
                        { course: "CCE-4825", teacher: "MZH" },
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-4805", teacher: "ANS" },
                        null,
                        null,
                        { course: "CCE-4825", teacher: "MZH" },
                        { course: "MGT-4701", teacher: "DJ" },
                        { course: "CCE-4802", teacher: "MIK", lab: "Software Development Lab" }
                    ],
                    Wednesday: [
                        null,
                        { course: "CCE-4803", teacher: "AAM" },
                        { course: "CCE-4826", teacher: "MZH", lab: "Software Development Lab" },
                        { course: "MGT-4701", teacher: "DJ" },
                        { course: "CCE-4802", teacher: "MIK", lab: "Software Development Lab" },
                        null
                    ]
                }
            }
        },

        // ==================== MALE SECTIONS ====================
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
                        null,
                        { course: "CCE-1105", teacher: "MJH" },
                        { course: "CCE-1105", teacher: "MJH" },
                        null,
                        null
                    ],
                    Monday: [
                        null,
                        { course: "GEEL-1106", teacher: "TI" },
                        { course: "GEEM-1101", teacher: "SIC" },
                        null,
                        null,
                        null
                    ],
                    Tuesday: [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    Wednesday: [
                        { course: "CCE-1103", teacher: "IUF" },
                        { course: "PHY-1101", teacher: "HM" },
                        { course: "CCE-1103", teacher: "IUF" },
                        { course: "GEEL-1106", teacher: "TI" },
                        null,
                        { course: "GEEM-1101", teacher: "SIC" }
                    ]
                },
                // Additional entries from the text that appear scattered:
                additionalEntries: [
                    { course: "MATH-1101", teacher: "AH" },
                    { course: "CCE-1106", teacher: "MJH", lab: "Programming Lab" },
                    { course: "CCE-1105", teacher: "MJH" },
                    { course: "PHY-1101", teacher: "HM" },
                    { course: "MATH-1101", teacher: "AH" },
                    { course: "CCE-1106", teacher: "MJH", lab: "Programming Lab" },
                    { course: "CCE-1102", teacher: "NS", lab: "Programming Lab" },
                    { course: "PHY-1101", teacher: "HM" },
                    { course: "GEEL-1106", teacher: "TI" },
                    { course: "CCE-1106", teacher: "MJH", lab: "Programming Lab" },
                    { course: "CCE-1102", teacher: "NS", lab: "Programming Lab" },
                    { course: "MATH-1101", teacher: "AH" }
                ]
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
                        null,
                        null,
                        null
                    ],
                    Monday: [
                        { course: "CCE-1105", teacher: "MJH" },
                        { course: "CCE-1105", teacher: "MJH" },
                        { course: "GEEL-1106", teacher: "TI" },
                        null,
                        null,
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-1102", teacher: "NS", lab: "Programming Lab" },
                        { course: "GEEM-1101", teacher: "MOF" },
                        { course: "CCE-1102", teacher: "NS", lab: "Programming Lab" },
                        { course: "GEEM-1101", teacher: "MOF" },
                        { course: "MATH-1101", teacher: "AH" },
                        { course: "CCE-1103", teacher: "IUF" }
                    ],
                    Wednesday: [
                        { course: "CCE-1104", teacher: "IUF", lab: "EEE Lab" },
                        { course: "PHY-1101", teacher: "HM" },
                        { course: "GEEL-1106", teacher: "TI" },
                        { course: "MATH-1101", teacher: "AH" },
                        { course: "CCE-1104", teacher: "IUF", lab: "EEE Lab" },
                        { course: "PHY-1101", teacher: "HM" }
                    ]
                },
                additionalEntries: [
                    { course: "GEEL-1106", teacher: "TI" },
                    { course: "MATH-1101", teacher: "AH" },
                    { course: "CCE-1104", teacher: "IUF", lab: "EEE Lab" },
                    { course: "PHY-1101", teacher: "HM" }
                ]
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
                        { course: "CCE-1208", teacher: "MJH", lab: "Programming Lab" }
                    ],
                    Sunday: [
                        null,
                        { course: "CCE-1209", teacher: "IUF" },
                        { course: "CCE-1209", teacher: "IUF" },
                        { course: "CCE-1207", teacher: "MJH" },
                        null,
                        { course: "MATH-1201", teacher: "AH" }
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
                        null
                    ],
                    Sunday: [
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "CCE-2302", teacher: "AAM", lab: "IOT Lab" },
                        { course: "CCE-2302", teacher: "AAM", lab: "IOT Lab" },
                        null,
                        null,
                        null
                    ],
                    Monday: [
                        null,
                        { course: "CHEM-2302", teacher: "DMS", lab: "Chemistry Lab (FSE)" },
                        { course: "CHEM-2302", teacher: "DMS", lab: "Chemistry Lab (FSE)" },
                        null,
                        null,
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-2305", teacher: "MAA" },
                        { course: "GEED-2302", teacher: "AI" },
                        { course: "CCE-2305", teacher: "MAA" },
                        { course: "CCE-2307", teacher: "MIK" },
                        { course: "GEED-2302", teacher: "AI" },
                        { course: "CCE-2307", teacher: "MIK" }
                    ],
                    Wednesday: [
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        { course: "CHEM-2301", teacher: "DMS" },
                        null,
                        null,
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        { course: "CHEM-2301", teacher: "DMS" }
                    ]
                },
                additionalEntries: [
                    { course: "MATH-2301", teacher: "DMGH" },
                    { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                    { course: "CHEM-2301", teacher: "DMS" }
                ]
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
                        null
                    ],
                    Sunday: [
                        { course: "CHEM-2301", teacher: "DMS" },
                        { course: "CHEM-2301", teacher: "DMS" },
                        { course: "CHEM-2301", teacher: "DMS" },
                        null,
                        null,
                        null
                    ],
                    Monday: [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        { course: "CCE-2302", teacher: "AAM", lab: "IOT Lab" },
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        { course: "CCE-2302", teacher: "AAM", lab: "IOT Lab" },
                        { course: "CCE-2310", teacher: "MR", lab: "IOT Lab" },
                        { course: "GEED-2302", teacher: "AI" }
                    ],
                    Wednesday: [
                        { course: "CHEM-2302", teacher: "DMS", lab: "Chemistry Lab (FSE)" },
                        { course: "CCE-2301", teacher: "AAM" },
                        { course: "CCE-2305", teacher: "MAA" },
                        null,
                        { course: "CHEM-2302", teacher: "DMS", lab: "Chemistry Lab (FSE)" },
                        { course: "CCE-2301", teacher: "AAM" }
                    ]
                },
                additionalEntries: [
                    { course: "CCE-2305", teacher: "MAA" },
                    { course: "MDP-2305", teacher: "SA" },
                    { course: "CCE-2301", teacher: "AAM" },
                    { course: "GEED-2302", teacher: "AI" }
                ]
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
                        null,
                        null,
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-2411", teacher: "RA" },
                        null,
                        { course: "CCE-2407", teacher: "NCS" },
                        { course: "GEBL-2401", teacher: "MHI" },
                        { course: "CCE-2407", teacher: "NCS" },
                        { course: "CCE-2411", teacher: "RA" }
                    ],
                    Wednesday: [
                        { course: "CCE-2411", teacher: "RA" },
                        null,
                        { course: "CCE-2401", teacher: "MIK" },
                        { course: "CCE-2412", teacher: "RA", lab: "EEE Lab" },
                        { course: "CCE-2406", teacher: "MR", lab: "AI & ML Lab" },
                        null
                    ]
                },
                additionalEntries: [
                    { course: "CCE-2401", teacher: "MIK" },
                    { course: "CCE-2412", teacher: "RA", lab: "EEE Lab" },
                    { course: "CCE-2406", teacher: "MR", lab: "AI & ML Lab" },
                    { course: "CCE-2407", teacher: "NCS" },
                    { course: "CCE-2412", teacher: "RA", lab: "EEE Lab" },
                    { course: "CCE-2406", teacher: "MR", lab: "AI & ML Lab" }
                ]
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
                        null,
                        null,
                        null
                    ],
                    Monday: [
                        { course: "CCE-3501", teacher: "NH" },
                        { course: "CCE-3501", teacher: "NH" },
                        { course: "CCE-3505", teacher: "MHS" },
                        null,
                        null,
                        null
                    ],
                    Tuesday: [
                        { course: "URED-3503", teacher: "MMA" },
                        { course: "CCE-3506", teacher: "MHS", lab: "Programming Lab" },
                        { course: "CCE-3509", teacher: "ANS" },
                        { course: "CCE-3506", teacher: "MHS", lab: "Programming Lab" },
                        { course: "CCE-3509", teacher: "ANS" },
                        { course: "CCE-3511", teacher: "DMJI" }
                    ],
                    Wednesday: [
                        { course: "CCE-3502", teacher: "NH", lab: "Programming Lab" },
                        { course: "CCE-3508", teacher: "ARAM", lab: "IOT Lab" },
                        { course: "CCE-3507", teacher: "ARAM" },
                        { course: "CCE-3511", teacher: "DMJI" },
                        { course: "CCE-3502", teacher: "NH", lab: "Programming Lab" },
                        { course: "CCE-3508", teacher: "ARAM", lab: "IOT Lab" }
                    ]
                },
                additionalEntries: [
                    { course: "CCE-3507", teacher: "ARAM" },
                    { course: "CCE-3503", teacher: "NCS" },
                    { course: "MDP-3503", teacher: "RA" },
                    { course: "CCE-3503", teacher: "NCS" }
                ]
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
                        null
                    ],
                    Sunday: [
                        { course: "CCE-3601", teacher: "DMSI" },
                        { course: "URED-3201", teacher: "MMA" },
                        { course: "GEHE-3601", teacher: "Adj DABS" },
                        null,
                        null,
                        null
                    ],
                    Monday: [
                        { course: "CCE-3609", teacher: "ARAM" },
                        { course: "CCE-3611", teacher: "MIK" },
                        { course: "CCE-3611", teacher: "MIK" },
                        null,
                        null,
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-3612", teacher: "MIK", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-3611", teacher: "MIK" },
                        { course: "CCE-3612", teacher: "MIK", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-3609", teacher: "ARAM" },
                        { course: "CCE-3612", teacher: "MIK", lab: "Telecom Lab (ETE)" },
                        { course: "CCE-3609", teacher: "ARAM" }
                    ],
                    Wednesday: [
                        { course: "CCE-3613", teacher: "NCS" },
                        { course: "CCE-3614", teacher: "NCS", lab: "AI & ML Lab" },
                        { course: "CCE-3616", teacher: "DMS" },
                        { course: "CCE-3613", teacher: "NCS" },
                        { course: "CCE-3614", teacher: "NCS", lab: "AI & ML Lab" },
                        { course: "CCE-3616", teacher: "DMS" }
                    ]
                },
                additionalEntries: [
                    { course: "CCE-3606", teacher: "WBA", lab: "IOT Lab" },
                    { course: "GEHE-3601", teacher: "Adj DABS" },
                    { course: "URED-3201", teacher: "MMA" }
                ]
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
                        null
                    ],
                    Sunday: [
                        { course: "CCE-4706", teacher: "MI", lab: "AI & ML Lab" },
                        { course: "CCE-4706", teacher: "MI", lab: "AI & ML Lab" },
                        { course: "CCE-4705", teacher: "MI" },
                        null,
                        null,
                        null
                    ],
                    Monday: [
                        { course: "CCE-4830", teacher: "MR", lab: "IOT Lab" },
                        { course: "CCE-4830", teacher: "MR", lab: "IOT Lab" },
                        { course: "URIH-4701", teacher: "NTH" },
                        null,
                        null,
                        null
                    ],
                    Tuesday: [
                        null,
                        { course: "CCE-4711", teacher: "DMJI" },
                        { course: "ECON-4701", teacher: "DSA" },
                        { course: "CCE-4711", teacher: "DMJI" },
                        { course: "ECON-4701", teacher: "DSA" },
                        { course: "CCE-4701", teacher: "HJ" }
                    ],
                    Wednesday: [
                        { course: "CCE-4705", teacher: "MI" },
                        { course: "URIH-4701", teacher: "NTH" },
                        { course: "CCE-4702", teacher: "HJ", lab: "AI & ML Lab" },
                        { course: "CCE-4701", teacher: "HJ" },
                        { course: "CCE-4705", teacher: "MI" },
                        { course: "CCE-4829", teacher: "MR" }
                    ]
                },
                additionalEntries: [
                    { course: "CCE-4702", teacher: "HJ", lab: "AI & ML Lab" },
                    { course: "CCE-4701", teacher: "HJ" },
                    { course: "CCE-4707", teacher: "DMAH", lab: "Telecom Lab (ETE)" },
                    { course: "CCE-4829", teacher: "MR" },
                    { course: "CCE-4702", teacher: "HJ", lab: "AI & ML Lab" },
                    { course: "CCE-4719", teacher: "SMI" }
                ]
            },

            "8AM": {
                room: "309, Academic Building 5 (Male Zone)",
                routine: {
                    Saturday: [
                        { course: "MGT-4701", teacher: "DJ" },
                        { course: "MGT-4701", teacher: "DJ" },
                        { course: "CCE-4803", teacher: "AAM" },
                        { course: "CCE-4808", teacher: "ZUA", lab: "AI & ML Lab" },
                        { course: "CCE-4808", teacher: "ZUA", lab: "AI & ML Lab" },
                        null
                    ],
                    Sunday: [
                        { course: "CCE-4825", teacher: "MZH" },
                        { course: "CCE-4806", teacher: "ANS", lab: "Programming Lab" },
                        { course: "CCE-4806", teacher: "ANS", lab: "Programming Lab" },
                        null,
                        null,
                        null
                    ],
                    Monday: [
                        null,
                        { course: "CCE-4804", teacher: "AAM", lab: "AI & ML Lab" },
                        { course: "CCE-4804", teacher: "AAM", lab: "AI & ML Lab" },
                        null,
                        null,
                        null
                    ],
                    Tuesday: [
                        { course: "CCE-4805", teacher: "ANS" },
                        { course: "LAW-4821", teacher: "MMM" },
                        null,
                        { course: "LAW-4821", teacher: "MMM" },
                        null,
                        null
                    ],
                    Wednesday: [
                        null,
                        { course: "CCE-4825", teacher: "MZH" },
                        { course: "CCE-4805", teacher: "ANS" },
                        { course: "CCE-4802", teacher: "MIK", lab: "IOT Lab" },
                        null,
                        { course: "CCE-4826", teacher: "MZH", lab: "AI & ML Lab" }
                    ]
                },
                additionalEntries: [
                    { course: "CCE-4802", teacher: "MIK", lab: "IOT Lab" },
                    { course: "CCE-4801", teacher: "MIM" },
                    { course: "CCE-4808", teacher: "ZUA", lab: "AI & ML Lab" },
                    { course: "CCE-4826", teacher: "MZH", lab: "AI & ML Lab" },
                    { course: "CCE-4803", teacher: "AAM" },
                    { course: "CCE-4801", teacher: "MIM" }
                ]
            }
        }
    }
};
