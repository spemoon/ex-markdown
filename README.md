# 扩展的 markdown 解析

在 [marke](https://github.com/chjj/markedd]) 基础上增加了 section 语法  
同时将其切分模块, 方便自己法都参照 [marke](https://github.com/chjj/markedd]) 

增加的 section 用法:

    :::section
    - method: GET
    - api: /media/`media-id`/likes
    - url: https://api.instagram.com/v1/media/555/likes?access_token=ACCESS-TOKEN
    - response:
    {
        "data": [{
            "username": "jack",
            "first_name": "Jack",
            "last_name": "Dorsey",
            "type": "user",
            "id": "66"
         }, {
             "username": "sammyjack",
             "first_name": "Sammy",
             "last_name": "Jack",
             "type": "user",
             "id": "29648"
         }]
    }
    - desc:
      Get a list of users who have liked this media.  
      Required scope: likes
    - params:
      username   tom
      password   ******
    :::

将生成以下类似的结构:

    <section class="api-section" id="api-section-1">
        <header>
            <span class="api-method">GET</span>
            <span class="api-rule">/media/<code>media-id</code>/likes</span>
        </header>
        <div class="api-response">
            <pre>
                <code class="lang-json">
                {
                        &quot;data&quot;: [{
                        &quot;username&quot;: &quot;jack&quot;,
                        &quot;first_name&quot;: &quot;Jack&quot;,
                        &quot;last_name&quot;: &quot;Dorsey&quot;,
                        &quot;type&quot;: &quot;user&quot;,
                        &quot;id&quot;: &quot;66&quot;
                    }, {
                        &quot;username&quot;: &quot;sammyjack&quot;,
                        &quot;first_name&quot;: &quot;Sammy&quot;,
                        &quot;last_name&quot;: &quot;Jack&quot;,
                        &quot;type&quot;: &quot;user&quot;,
                        &quot;id&quot;: &quot;29648&quot;
                    }]
                }
                </code>
            </pre>
        </div>
        <div class="api-description">
            <p>
                Get a list of users who have liked this media.
                Required scope: likes
            </p>
        </div>
        <div class="api-parameter">
            <ul>
                <li>
                    <em>username</em>
                    <span>tom</span>
                </li>
                <li>
                    <em>password</em>
                    <span>******</span>
                </li>
            </ul>
        </div>
    </section>