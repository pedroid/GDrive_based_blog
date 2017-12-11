#@free Blog lunr search

    @lunr
        @@database: scripts
        1. Lunr, Like Solr, but much smaller, and not as bright.
        2. React, A JavaScript library for building user interfaces. 
        3. Lodash, A modern JavaScript utility library delivering modularity, performance & extras.
        @@end
        @@search
        "bright" in scripts
        @@end
    @end

在後端就會被轉換成這樣

    documents = [{
      "name": "Lunr",
      "text": "Like Solr, but much smaller, and not as bright."
    }, {
      "name": "React",
      "text": "A JavaScript library for building user interfaces."
    }, {
      "name": "Lodash",
      "text": "A modern JavaScript utility library delivering modularity, performance & 
    extras."
    }]

    var idx = lunr(function () {
      this.ref('name')
      this.field('text')

      documents.forEach(function (doc) {
        this.add(doc)
      }, this)
    })

    idx.search("bright")

這個的應用是什麼呢？想像當你想要寫一個blog來介紹某個演算法時，我們就可以用以下的方式來寫這個blog

    今天要介紹的這個演算法，叫作lunr，他的主要功能是搜尋文章中的關鍵字，以下是使用範例，我們首先建立資料庫
    1. Lunr, Like Solr, but much smaller, and not as bright.
    2. React, A JavaScript library for building user interfaces. 
    3. Lodash, A modern JavaScript utility library delivering modularity, performance & extras.

    @lunr
    @@database: scripts
    1. Lunr, Like Solr, but much smaller, and not as bright.
    2. React, A JavaScript library for building user interfaces. 
    3. Lodash, A modern JavaScript utility library delivering modularity, performance & extras.
    @end

    我們在資料庫中使用lunr這個函式庫搜尋"library"，就會得到以下結果：
    @@search: 1
    "library" in scripts
    @@end

    @textarea:testinput
    
    @@search: 1
    @textarea:testinput, scripts
    @@end

然後產生的結果就會如下

    今天要介紹的這個演算法，叫作lunr，他的主要功能是搜尋文章中的關鍵字，以下是使用範例，我們首先建立資料庫
    1. Lunr, Like Solr, but much smaller, and not as bright.
    2. React, A JavaScript library for building user interfaces. 
    3. Lodash, A modern JavaScript utility library delivering modularity, performance & extras.

    我們在資料庫中使用lunr這個函式庫搜尋"library"，就會得到以下結果：
     React
    
    [textarea]
    [search results]


