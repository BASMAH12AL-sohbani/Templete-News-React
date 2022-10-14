
import
{
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    
    UilMoneyWithdrawal,
    UilUsdSquare,


} from "@iconscout/react-unicons";

export const SidebarData = [
    {
        icon :UilEstate,
        heading:"DashBoard",
    },
    {
        icon :UilClipboardAlt,
        heading:"Orders",
    },
    {
        icon :UilUsersAlt,
        heading:"Customers",
    },
    {
        icon :UilPackage,
        heading:"Prodects",
    },{
        icon :UilChart,
        heading:"Analytics",
    }
   
];

export const CardsData = [
    {
        title:'Sales',
        color:{
            background : "linear-gradient(180deg, #5f0a87 0% , #a4508b 100%)",
            boxShadow : "0px 10px 20px 0px #e0c6f5",
        },
        barValue : 70,
        value : "25,970",
        png: UilUsdSquare ,
        series :[
            {
                name : "Sales",
                data: [31,40,28,51,42,109,100],
            }
        ]
    },
    {
        title:'Revenue',
        color:{
            background : "linear-gradient(180deg, #ffdd00 0% , #fbb034 100%)",
            boxShadow : "0px 10px 20px 0px #e0c6f5",
        },
        barValue : 90,
        value : "25,970",
        png: UilMoneyWithdrawal ,
        series :[
            {
                name : "Sales",
                data: [31,40,28,51,42,109,100],
            }
        ]
    },
    {
        title:'Expenses',
        color:{
            background : "linear-gradient(180deg, #e58c8a 0% , #eec0c6 100%)",
            boxShadow : "0px 10px 20px 0px #e0c6f5",
        },
        barValue : 60,
        value : "25,970",
        png: UilClipboardAlt ,
        series :[
            {
                name : "Sales",
                data: [31,40,28,51,42,109,100],
            }
        ]
    }
]