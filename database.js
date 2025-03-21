const admins = [
     {
         id: 1,
         name: "ranjan",
         age: 45,
         role: "Chief Officer",
         joinedDate: "2020-03-01",
         contact: "ranjan@gmail.com",
         profilepic: "https://example.com/admin1.jpg",
         password: "1234",
         email: "admin.one@system.com"
     },
     {
         id: 2,
         name: "Admin Two",
         age: 38,
         role: "Investigator",
         joinedDate: "2021-05-10",
         contact: "admin2@example.com",
         profilepic: "https://example.com/admin2.jpg",
         password: "admin2pass",
         email: "admin.two@system.com"
     },
     {
         id: 3,
         name: "Admin Three",
         age: 42,
         role: "Forensic Analyst",
         joinedDate: "2019-09-20",
         contact: "admin3@example.com",
         profilepic: "https://example.com/admin3.jpg",
         password: "admin3pass",
         email: "admin.three@system.com"
     },
     {
         id: 4,
         name: "Admin Four",
         age: 50,
         role: "Legal Advisor",
         joinedDate: "2018-01-15",
         contact: "admin4@example.com",
         profilepic: "https://example.com/admin4.jpg",
         password: "admin4pass",
         email: "admin.four@system.com"
     },
     {
         id: 5,
         name: "Admin Five",
         age: 35,
         role: "Cyber Security Expert",
         joinedDate: "2022-06-05",
         contact: "admin5@example.com",
         profilepic: "https://example.com/admin5.jpg",
         password: "admin5pass",
         email: "admin.five@system.com"
     }
 ];
 
 const criminals = [
     {
         id: 1,
         caseNumber: "CR-4821",
         name: "John Doe",
         age: 30,
         crimeType: "Theft",
         status: "Open",
         arrestDate: "2024-11-15",
         description: "Involved in multiple theft cases targeting jewelry stores in the city.",
         profilepic: "https://example.com/profile1.jpg"
     },
     {
         id: 2,
         caseNumber: "CR-7293",
         name: "Jane Smith",
         age: 28,
         crimeType: "Fraud",
         status: "Closed",
         arrestDate: "2023-09-10",
         description: "Known for credit card scams in multiple regions.",
         profilepic: "https://example.com/profile2.jpg"
     },
     {
         id: 3,
         caseNumber: "CR-5834",
         name: "Mark Johnson",
         age: 40,
         crimeType: "Robbery",
         status: "Open",
         arrestDate: "2025-01-05",
         description: "Arrested for armed robbery at multiple convenience stores.",
         profilepic: "https://example.com/profile3.jpg"
     },
     {
         id: 4,
         caseNumber: "CR-3192",
         name: "Alice Brown",
         age: 35,
         crimeType: "Drug Trafficking",
         status: "Under Investigation",
         arrestDate: "2024-06-21",
         description: "Suspected involvement in an international drug ring.",
         profilepic: "https://example.com/profile4.jpg"
     },
     {
         id: 5,
         caseNumber: "CR-8647",
         name: "Michael Green",
         age: 45,
         crimeType: "Kidnapping",
         status: "Open",
         arrestDate: "2024-12-11",
         description: "Linked to multiple abduction cases in urban areas.",
         profilepic: "https://example.com/profile5.jpg"
     },
     {
         id: 6,
         caseNumber: "CR-4720",
         name: "Emily White",
         age: 27,
         crimeType: "Assault",
         status: "Closed",
         arrestDate: "2023-11-04",
         description: "Involved in a public assault incident.",
         profilepic: "https://example.com/profile6.jpg"
     },
     {
         id: 7,
         caseNumber: "CR-6981",
         name: "Robert King",
         age: 50,
         crimeType: "Burglary",
         status: "On Bail",
         arrestDate: "2024-05-12",
         description: "Repeated burglaries in residential areas.",
         profilepic: "https://example.com/profile7.jpg"
     },
     {
         id: 8,
         caseNumber: "CR-2853",
         name: "Jessica Taylor",
         age: 33,
         crimeType: "Cybercrime",
         status: "Open",
         arrestDate: "2024-08-15",
         description: "Exploited social media accounts for phishing attacks.",
         profilepic: "https://example.com/profile8.jpg"
     },
     {
         id: 9,
         caseNumber: "CR-9102",
         name: "Daniel Scott",
         age: 37,
         crimeType: "Money Laundering",
         status: "Closed",
         arrestDate: "2022-12-01",
         description: "Suspected in laundering millions through fake businesses.",
         profilepic: "https://example.com/profile9.jpg"
     },
     {
         id: 10,
         caseNumber: "CR-3376",
         name: "Laura Adams",
         age: 29,
         crimeType: "Forgery",
         status: "Open",
         arrestDate: "2025-02-19",
         description: "Known for producing high-quality counterfeit documents.",
         profilepic: "https://example.com/profile10.jpg"
     },
     {
         id: 11,
         caseNumber: "CR-5418",
         name: "Tom Clark",
         age: 41,
         crimeType: "Smuggling",
         status: "Closed",
         arrestDate: "2023-10-10",
         description: "Caught smuggling rare artifacts across borders.",
         profilepic: "https://example.com/profile11.jpg"
     },
     {
         id: 12,
         caseNumber: "CR-7659",
         name: "Sarah Wilson",
         age: 31,
         crimeType: "Bribery",
         status: "Closed",
         arrestDate: "2023-04-28",
         description: "Charged for attempting to bribe public officials.",
         profilepic: "https://example.com/profile12.jpg"
     },
     {
         id: 13,
         caseNumber: "CR-2584",
         name: "Harry Carter",
         age: 38,
         crimeType: "Stalking",
         status: "Under Investigation",
         arrestDate: "2024-07-07",
         description: "Reported for persistent stalking and harassment.",
         profilepic: "https://example.com/profile13.jpg"
     },
 
     {
         id: 14,
         caseNumber: "CR-2024-0014",
         name: "Michael Johnson",
         age: 42,
         crimeType: "Robbery",
         status: "Closed",
         arrestDate: "2024-02-14",
         description: "Convicted for armed robbery in a local bank.",
         profilepic: "https://example.com/profile14.jpg"
     },
     {
         id: 15,
         caseNumber: "CR-2024-0015",
         name: "Sophia Martinez",
         age: 29,
         crimeType: "Fraud",
         status: "Open",
         arrestDate: "2024-03-10",
         description: "Accused of running an online scam operation.",
         profilepic: "https://example.com/profile15.jpg"
     },
     {
         id: 16,
         caseNumber: "CR-2024-0016",
         name: "Daniel Wilson",
         age: 35,
         crimeType: "Assault",
         status: "Under Investigation",
         arrestDate: "2024-01-28",
         description: "Involved in multiple physical assault cases.",
         profilepic: "https://example.com/profile16.jpg"
     },
     {
         id: 17,
         caseNumber: "CR-2024-0017",
         name: "Olivia Brown",
         age: 31,
         crimeType: "Cyber Crime",
         status: "Closed",
         arrestDate: "2023-11-05",
         description: "Hacked multiple bank accounts for fraudulent transactions.",
         profilepic: "https://example.com/profile17.jpg"
     },
     {
         id: 18,
         caseNumber: "CR-2024-0018",
         name: "William Taylor",
         age: 46,
         crimeType: "Murder",
         status: "Open",
         arrestDate: "2023-09-21",
         description: "Prime suspect in an ongoing murder investigation.",
         profilepic: "https://example.com/profile18.jpg"
     },
     {
         id: 19,
         caseNumber: "CR-2024-0019",
         name: "Emily White",
         age: 27,
         crimeType: "Drug Possession",
         status: "Under Investigation",
         arrestDate: "2024-05-02",
         description: "Caught with illegal substances at an airport.",
         profilepic: "https://example.com/profile19.jpg"
     },
     {
         id: 20,
         caseNumber: "CR-2024-0020",
         name: "James Anderson",
         age: 39,
         crimeType: "Burglary",
         status: "Closed",
         arrestDate: "2023-12-15",
         description: "Arrested for breaking into multiple houses.",
         profilepic: "https://example.com/profile20.jpg"
     },
     {
         id: 21,
         caseNumber: "CR-2024-0021",
         name: "Ava Clark",
         age: 34,
         crimeType: "Kidnapping",
         status: "Open",
         arrestDate: "2024-04-11",
         description: "Suspected in a high-profile kidnapping case.",
         profilepic: "https://example.com/profile21.jpg"
     },
     {
         id: 22,
         caseNumber: "CR-2024-0022",
         name: "Noah Harris",
         age: 45,
         crimeType: "Bribery",
         status: "Under Investigation",
         arrestDate: "2024-06-18",
         description: "Caught bribing government officials.",
         profilepic: "https://example.com/profile22.jpg"
     },
     {
         id: 23,
         caseNumber: "CR-2024-0023",
         name: "Isabella Lewis",
         age: 30,
         crimeType: "Human Trafficking",
         status: "Open",
         arrestDate: "2024-07-25",
         description: "Leader of an underground trafficking ring.",
         profilepic: "https://example.com/profile23.jpg"
     },
     {
         id: 24,
         caseNumber: "CR-2024-0024",
         name: "Lucas Moore",
         age: 40,
         crimeType: "Extortion",
         status: "Closed",
         arrestDate: "2024-08-11",
         description: "Threatened business owners for money.",
         profilepic: "https://example.com/profile24.jpg"
     },
     {
         id: 25,
         caseNumber: "CR-2024-0025",
         name: "Ella Gonzalez",
         age: 33,
         crimeType: "Forgery",
         status: "Open",
         arrestDate: "2024-09-05",
         description: "Forged official documents and legal papers.",
         profilepic: "https://example.com/profile25.jpg"
     },
     {
         id: 26,
         caseNumber: "CR-2024-0026",
         name: "Mason King",
         age: 50,
         crimeType: "Money Laundering",
         status: "Under Investigation",
         arrestDate: "2024-10-20",
         description: "Accused of laundering illegal funds.",
         profilepic: "https://example.com/profile26.jpg"
     },
     {
         id: 27,
         caseNumber: "CR-2024-0027",
         name: "Liam Scott",
         age: 29,
         crimeType: "Arson",
         status: "Closed",
         arrestDate: "2024-11-13",
         description: "Set multiple properties on fire.",
         profilepic: "https://example.com/profile27.jpg"
     },
     {
         id: 28,
         caseNumber: "CR-2024-0028",
         name: "Grace Hall",
         age: 41,
         crimeType: "Illegal Arms Dealing",
         status: "Open",
         arrestDate: "2024-12-02",
         description: "Caught smuggling firearms.",
         profilepic: "https://example.com/profile28.jpg"
     },
     {
         id: 29,
         caseNumber: "CR-2024-0029",
         name: "Ethan Green",
         age: 36,
         crimeType: "Vandalism",
         status: "Under Investigation",
         arrestDate: "2025-01-15",
         description: "Destroyed public property.",
         profilepic: "https://example.com/profile29.jpg"
     },
     {
         id: 30,
         caseNumber: "CR-2024-0030",
         name: "Madison Adams",
         age: 37,
         crimeType: "Identity Theft",
         status: "Closed",
         arrestDate: "2025-02-01",
         description: "Stole multiple identities for fraud.",
         profilepic: "https://example.com/profile30.jpg"
     },
     {
         id: 31,
         caseNumber: "CR-2024-0031",
         name: "Alexander Carter",
         age: 44,
         crimeType: "Smuggling",
         status: "Open",
         arrestDate: "2025-03-10",
         description: "Accused of smuggling illegal goods.",
         profilepic: "https://example.com/profile31.jpg"
     },
     {
         id: 32,
         caseNumber: "CR-2024-0032",
         name: "Scarlett Mitchell",
         age: 28,
         crimeType: "Harassment",
         status: "Under Investigation",
         arrestDate: "2025-04-05",
         description: "Repeated harassment of a public official.",
         profilepic: "https://example.com/profile32.jpg"
     },
     {
         id: 33,
         caseNumber: "CR-2024-0033",
         name: "David Russell",
         age: 49,
         crimeType: "Tax Evasion",
         status: "Closed",
         arrestDate: "2025-05-20",
         description: "Evaded millions in taxes over several years.",
         profilepic: "https://example.com/profile33.jpg"
     },
     {
         id: 34,
         caseNumber: "CR-4821",
         name: "John Doe",
         age: 30,
         crimeType: "Theft",
         status: "Open",
         arrestDate: "2024-11-15",
         description: "Involved in multiple theft cases targeting jewelry stores in the city.",
         profilepic: "https://example.com/profile1.jpg"
     },
     {
         id: 35,
         caseNumber: "CR-7293",
         name: "Jane Smith",
         age: 28,
         crimeType: "Fraud",
         status: "Closed",
         arrestDate: "2023-09-10",
         description: "Known for credit card scams in multiple regions.",
         profilepic: "https://example.com/profile2.jpg"
     },
     {
         id: 36,
         caseNumber: "CR-5834",
         name: "Mark Johnson",
         age: 40,
         crimeType: "Robbery",
         status: "Open",
         arrestDate: "2025-01-05",
         description: "Arrested for armed robbery at multiple convenience stores.",
         profilepic: "https://example.com/profile3.jpg"
     },
     {
         id: 37,
         caseNumber: "CR-3192",
         name: "Alice Brown",
         age: 35,
         crimeType: "Drug Trafficking",
         status: "Under Investigation",
         arrestDate: "2024-06-21",
         description: "Suspected involvement in an international drug ring.",
         profilepic: "https://example.com/profile4.jpg"
     },
     {
         id: 38,
         caseNumber: "CR-8647",
         name: "Michael Green",
         age: 45,
         crimeType: "Kidnapping",
         status: "Open",
         arrestDate: "2024-12-11",
         description: "Linked to multiple abduction cases in urban areas.",
         profilepic: "https://example.com/profile5.jpg"
     },
     {
         id: 39,
         caseNumber: "CR-4720",
         name: "Emily White",
         age: 27,
         crimeType: "Assault",
         status: "Closed",
         arrestDate: "2023-11-04",
         description: "Involved in a public assault incident.",
         profilepic: "https://example.com/profile6.jpg"
     },
     {
         id: 40,
         caseNumber: "CR-6981",
         name: "Robert King",
         age: 50,
         crimeType: "Burglary",
         status: "On Bail",
         arrestDate: "2024-05-12",
         description: "Repeated burglaries in residential areas.",
         profilepic: "https://example.com/profile7.jpg"
     },
     {
         id: 41,
         caseNumber: "CR-2853",
         name: "Jessica Taylor",
         age: 33,
         crimeType: "Cybercrime",
         status: "Open",
         arrestDate: "2024-08-15",
         description: "Exploited social media accounts for phishing attacks.",
         profilepic: "https://example.com/profile8.jpg"
     },
     {
         id: 42,
         caseNumber: "CR-9102",
         name: "Daniel Scott",
         age: 37,
         crimeType: "Money Laundering",
         status: "Closed",
         arrestDate: "2022-12-01",
         description: "Suspected in laundering millions through fake businesses.",
         profilepic: "https://example.com/profile9.jpg"
     },
     {
         id: 43,
         caseNumber: "CR-3376",
         name: "Laura Adams",
         age: 29,
         crimeType: "Forgery",
         status: "Open",
         arrestDate: "2025-02-19",
         description: "Known for producing high-quality counterfeit documents.",
         profilepic: "https://example.com/profile10.jpg"
     },
     {
         id: 44,
         caseNumber: "CR-5418",
         name: "Tom Clark",
         age: 41,
         crimeType: "Smuggling",
         status: "Closed",
         arrestDate: "2023-10-10",
         description: "Caught smuggling rare artifacts across borders.",
         profilepic: "https://example.com/profile11.jpg"
     },
     {
         id: 45,
         caseNumber: "CR-7659",
         name: "Sarah Wilson",
         age: 31,
         crimeType: "Bribery",
         status: "Closed",
         arrestDate: "2023-04-28",
         description: "Charged for attempting to bribe public officials.",
         profilepic: "https://example.com/profile12.jpg"
     },
     {
         id: 46,
         caseNumber: "CR-2584",
         name: "Harry Carter",
         age: 38,
         crimeType: "Stalking",
         status: "Under Investigation",
         arrestDate: "2024-07-07",
         description: "Reported for persistent stalking and harassment.",
         profilepic: "https://example.com/profile13.jpg"
     },
 
 ];

 export {admins, criminals}