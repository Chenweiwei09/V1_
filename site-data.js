/* 編輯這個檔案就能新增教材分類、課次與活動。請保留每個 id 不重複。 */
window.SITE_DATA = {
  siteTitle: "學習教室小教具",
  subtitle: "希望這裡的東西可以越來越多，幫助老師與學生更快樂地學習",
  footerCredit: "Made with ♡ by weiwei ",
  subjects: [
    {
  id: "math6",
  title: "南一數學六年級",
  publisher: "南一",
  subject: "數學",
  grade: "六年級",
  emoji: "🧮",
  tone: "peach",
  lessons: [
    {
      id: "G6U1",
      title: "第一單元｜質因數分解和短除法",
      activities: [
        {
          id: "fractions-game",
          title: "質因數分解和短除法",
          description: "複習質因數分解的概念，並練習短除法的技巧",
          type: "互動遊戲",
          url: "games/G6U1math.html"
        }
      ]
    }
  ]
}, 
   {id:"chinese5", title:"南一國語五年級", publisher:"南一", subject:"國語", grade:"五年級", emoji:"📖", tone:"sage", lessons:[
      {id:"G5L1", title:"第一課｜幸福筆記本", activities:[]},
      {id:"G5L2", title:"第二課｜做人做事做長久", activities:[]},
      {id:"G5L3", title:"第三課｜孔雀錯了", activities:[]},
{
  id: "G5L4",
  title: "第四課｜特別的海",
  activities: [
    {
      id: "mindmap",
      title: "互動心智圖",
      description: "閱讀心智圖，拖曳答案卡片完成分支",
      type: "拖曳遊戲",
      url: "games/G5L4.html"
    },
    {
      id: "character-game",
      title: "識字大挑戰",
      description: "18個生字闖關，包含初階看字、中階組字及進階手寫練習",
      type: "識字遊戲",
      url: "games/G5L4生字.html"
    }
  ]
},
      {id:"G5L5", title:"第五課｜漫遊花東", activities:[{id:"mindmap",title:"互動心智圖",description:"探索花東景色與課文重點",type:"拖曳遊戲",url:"games/G5L5.html"}]},
      {id:"G5L6", title:"第六課｜護送螃蟹過馬路", activities:[{id:"mindmap",title:"互動心智圖",description:"認識陸蟹與護蟹行動",type:"拖曳遊戲",url:"games/G5L6.html"}]}
    ]},
    {id:"math1", title:"翰林數學一年級", publisher:"翰林", subject:"數學", grade:"一年級", emoji:"🔢", tone:"sky", lessons:[]},
    {id:"chinese6", title:"翰林國語六年級", publisher:"翰林", subject:"國語", grade:"六年級", emoji:"✏️", tone:"lilac", lessons:[]}
  ]
};
