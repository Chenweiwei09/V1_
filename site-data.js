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

    {
      id: "chinese5",
      title: "南一國語五年級",
      publisher: "南一",
      subject: "國語",
      grade: "五年級",
      emoji: "📖",
      tone: "sage",
      lessons: [
        { id: "G5L1", title: "第一課｜幸福筆記本", activities: [] },
        { id: "G5L2", title: "第二課｜做人做事做長久", activities: [] },
        { id: "G5L3", title: "第三課｜孔雀錯了", activities: [] },

        {
          id: "G5L4",
          title: "第四課｜特別的海",
          activities: [
            {
              id: "mindmap",
              title: "互動心智圖",
              description: "閱讀心智圖，拖曳答案卡片完成分支",
              type: "拖曳遊戲",
              url: "games/G5L4心智圖.html"
            },
            {
              id: "character-game",
              title: "識字大挑戰",
              description: "18個生字闖關，初階看字、中階組字及進階手寫",
              type: "識字遊戲",
              url: "games/G5L4生字.html"
            },
            {
              id: "character-game2",
              title: "寫寫生字",
              description: "18個生字手寫練習，包含筆順提示與書寫範例",
              type: "寫字遊戲",
              url: "games/G5L4生字書寫.html"
            },
            {
              id: "slides-preview",
              title: "第四課教學簡報",
              description: "線上觀看第四課的教學投影片",
              type: "教學簡報",
              url: "materials/G5L4/slides.pdf"
            },
            {
              id: "slides-download",
              title: "下載教學簡報 PPT",
              description: "下載可編輯的 PowerPoint 簡報",
              type: "PPT下載",
              url: "materials/G5L4/G5 L4複習.pptx"
            },
            {
              id: "worksheet-preview",
              title: "第四課學習單",
              description: "線上瀏覽、列印第四課學習單",
              type: "PDF學習單",
              url: "materials/G5L4/G5 L4 複習學習單+語詞.docx"
            },
            {
              id: "worksheet-download",
              title: "測試版本沒東西",
              description: "下載 Word 格式，方便教師修改",
              type: "Word學習單",
              url: "materials/G5L4/G5 L4 複習學習單+語詞.docx"
            }
          ]
        },

        {
          id: "G5L5",
          title: "第五課｜漫遊花東",
          activities: [
            {
              id: "mindmap",
              title: "互動心智圖",
              description: "探索花東景色與課文重點",
              type: "拖曳遊戲",
              url: "games/G5L5心智圖.html"
            },
            {
              id: "G5L5-characters2",
              title: "寫寫生字",
              description: "與作者漫遊花東，認識生字與詞語",
              type: "識字遊戲",
              url: "games/G5L5生字書寫.html"
            }
          ]
        },

        {
          id: "G5L6",
          title: "第六課｜護送螃蟹過馬路",
          activities: [
            {
              id: "mindmap",
              title: "互動心智圖",
              description: "認識陸蟹與護蟹行動",
              type: "識字遊戲",
              url: "games/G5L6心智圖.html"
            },
            {
              id: "G5L6-characters2",
              title: "寫寫生字",
              description: "認識陸蟹與護蟹行動，認識生字與詞語",
              type: "識字遊戲",
              url: "games/G5L6生字書寫.html"
            }
          ]
        },
      ]
    },

    {
      id: "math1",
      title: "翰林數學一年級",
      publisher: "翰林",
      subject: "數學",
      grade: "一年級",
      emoji: "🔢",
      tone: "sky",
      lessons: []
    },

    {
      id: "chinese6",
      title: "翰林國語六年級",
      publisher: "翰林",
      subject: "國語",
      grade: "六年級",
      emoji: "✏️",
      tone: "lilac",
      lessons: [
       {
          id: "G6L1",
          title: "第一課｜遇見自己",
          activities: []
        },
        {
          id: "G6L2",
          title: "第二課｜為什麼大家不理我",
          activities: [
            {
              id: "G6L2-characters",
              title: "第二課生字遊戲",
              description: "練習第二課生字，透過互動活動加強識字能力",
              type: "識字遊戲",
              url: "games/G6L2生字.html"
            },
            {
              id: "G6L2-characters2",
              title: "寫寫生字",
              description: "練習寫寫第二課的生字，包含筆順提示與書寫範例",
              type: "識字遊戲",
              url: "games/G6L2生字書寫.html"
            }
          ]
        },
        {
          id: "G6L3",
          title: "第三課｜孔子說的話",
          activities: [
           {
              id: "G6L3-characters",
              title: "第三課生字遊戲",
              description: "練習第三課生字，透過互動活動加強識字能力",
              type: "識字遊戲",
              url: "games/G6L3生字.html"
            },
            {
              id: "G6L3-characters2",
              title: "寫寫生字",
              description: "練習寫寫第三課的生字，包含筆順提示與書寫範例",
              type: "識字遊戲",
              url: "games/G6L3生字書寫.html"
            }
          ]
        },
        {
          id: "G6L4",
          title: "第四課｜向大自然學習",
          activities: []
        },
        {
          id: "G6L5",
          title: "第五課｜樹的聯想",
          activities: []
        },
        {
          id: "G6L6",
          title: "第六課｜善用自嘲，展現幽默",
          activities: []
        },
      ]
    }
  ]
};
