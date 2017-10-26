





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d7137690e30123bade38abb082ac79f36cc7a105ff92e602405f53b725465cab.css" integrity="sha256-1xN2kOMBI7reOKuwgqx582zHoQX/kuYCQF9TtyVGXKs=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-7c9640afed028335a084062f1a48375f3b7403cb0ae3fd6602c374582939079d.css" integrity="sha256-fJZAr+0CgzWghAYvGkg3Xzt0A8sK4/1mAsN0WCk5B50=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>blog/prettify.js at master · pedroid/blog</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/731470?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="pedroid/blog" property="og:title" /><meta content="https://github.com/pedroid/blog" property="og:url" /><meta content="Contribute to blog development by creating an account on GitHub." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjE2MjUzMzQ1OmUyOGEyMmQzN2MxY2RmZWM3MWVjNmE3NDhjMDYzZTE3ZmEyMDVlY2U2NzA2YzIyMmFmOWYyZDk5N2ZmMmVjYmU=--51937730109824f58b258f510eaf037ffb49c476">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="6E22:2DCA8:70C5432:A8484E2:59F1399C" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="6E22:2DCA8:70C5432:A8484E2:59F1399C" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="731470" name="octolytics-actor-id" /><meta content="pedroid" name="octolytics-actor-login" /><meta content="be1ae6bd9e585f60689fe073f3b5fc2ea02527134341c6bd46594e5d30f3f40e" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="pedroid">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NTFmY2FjN2QwZWUxNmJhYzhmN2IxYjdjZWNlOWMwYmEzNmFiNzk1MDYzZWVkNzI2MTg0NTY5ZGQyNGJiYTA1Nnx7InJlbW90ZV9hZGRyZXNzIjoiMjAzLjczLjEzMi4xMTYiLCJyZXF1ZXN0X2lkIjoiNkUyMjoyRENBODo3MEM1NDMyOkE4NDg0RTI6NTlGMTM5OUMiLCJ0aW1lc3RhbXAiOjE1MDg5ODExNTQsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="REMOTE_NEXT,UNIVERSE_BANNER">

  <meta name="html-safe-nonce" content="eba0a3312d613a6c5e8c44f2b23b306920ee866b">

  <meta http-equiv="x-pjax-version" content="908d7ca9d30d624d0e06113854ba28a8">
  

      <link href="https://github.com/pedroid/blog/commits/master.atom" rel="alternate" title="Recent Commits to blog:master" type="application/atom+xml">

  <meta name="description" content="Contribute to blog development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/pedroid/blog git https://github.com/pedroid/blog.git">

  <meta content="731470" name="octolytics-dimension-user_id" /><meta content="pedroid" name="octolytics-dimension-user_login" /><meta content="88480531" name="octolytics-dimension-repository_id" /><meta content="pedroid/blog" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="88480531" name="octolytics-dimension-repository_network_root_id" /><meta content="pedroid/blog" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/pedroid/blog/blob/master/library/prettify/prettify.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon"
                   class="js-site-favicon"
                   href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex px-3 flex-justify-between container-lg">
    <div class="d-flex flex-justify-between">
      <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/pedroid/blog/search" class="js-site-search-form" data-scoped-search-url="/pedroid/blog/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/pedroid/blog/blob/master/library/prettify/prettify.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
                Pull requests
</a>            </li>
            <li>
              <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
                Issues
</a>            </li>
                <li>
                  <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">
                    Marketplace
</a>                </li>
            <li>
              <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown js-menu-container js-header-notifications">
    <span class="d-inline-block  px-2">
      
      <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-channel="notification-changed:731470" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status "></span>
          <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown js-menu-container">
    <details class="dropdown-details js-dropdown-details d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg aria-hidden="true" class="octicon octicon-plus float-left mr-1 mt-1" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="pedroid/blog">This repository</span>
  </div>
    <a class="dropdown-item" href="/pedroid/blog/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </details>
  </li>

  <li class="dropdown js-menu-container">

    <details class="dropdown-details js-dropdown-details d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@pedroid" class="avatar float-left mr-1" src="https://avatars3.githubusercontent.com/u/731470?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        <li class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">pedroid</strong>
        </li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="/pedroid" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a></li>
        <li><a class="dropdown-item" href="/pedroid?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a></li>
          <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your Gists</a></li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a></li>

        <li><a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a></li>

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="v5ow7JNkQFYrpYj9/TrKdMQ3zuery5lpXBafsq+U5kctmsHM7qjovmBVGGnjZxvZ9kNRU6LEznDjsFfnX4oTMw==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5YOJCTUnv2PQlGWU3ON3VU1mXutuh+pqWHHhtp3qfst3g3gpSOsXi5tk9QDCvqb4fxLBX2eIvXPn1ynjbfSLvw==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>


      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      





    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav ">
      <div class="repohead-details-container clearfix container ">

        <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eNLpAYuLa83wPwIu2GWg7sHbSrHWu9TLsBmIIXGoUODM+JZP/M/55lZBlW/CXbigIHU03WrV4f4LKwtQ3pE2fQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="88480531" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/pedroid/blog/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Unwatch
            </span>
          </a>
            <a class="social-count js-social-count"
              href="/pedroid/blog/watchers"
              aria-label="1 user is watching this repository">
              1
            </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/pedroid/blog/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xH+hMNLnjwBboeLvIbNEGbedrqPUARR/biyRE7i0eG1k+qF5anRPJwvn2A4p2FA10Hj38YCQ6Qt3d2QFzUnWIQ==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar pedroid/blog"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/pedroid/blog/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/pedroid/blog/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="l2sCQm6iOSjNEfZPnlVeLrXd0NYY2jOTloe52aIoKIYkGCT+boVnDE0gxypNMasi/Ddh+BOvWnH/CvDrDtqhwQ==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star pedroid/blog"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/pedroid/blog/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/pedroid/blog/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="T4T48PDaoM55dy3XTA8T8QjwJzcK/3YB+9vPodnrqlfrVsBrZxMimYxyl+YCZ8H2lVMVL45IZYy/qI6Hig6AZA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of pedroid/blog to your account"
                aria-label="Fork your own copy of pedroid/blog to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/pedroid/blog/network" class="social-count"
       aria-label="0 users forked this repository">
      0
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/pedroid" class="url fn" rel="author">pedroid</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/pedroid/blog" data-pjax="#js-repo-pjax-container">blog</a></strong>

</h1>

      </div>
      
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/pedroid/blog" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /pedroid/blog" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/pedroid/blog/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /pedroid/blog/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/pedroid/blog/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /pedroid/blog/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/pedroid/blog/projects" class="js-selected-navigation-item reponav-item" data-hotkey="g b" data-selected-links="repo_projects new_repo_project repo_project /pedroid/blog/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a href="/pedroid/blog/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /pedroid/blog/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/pedroid/blog/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /pedroid/blog/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>
    <a href="/pedroid/blog/settings" class="js-selected-navigation-item reponav-item" data-selected-links="repo_settings repo_branch_settings hooks integration_installations /pedroid/blog/settings">
      <svg aria-hidden="true" class="octicon octicon-gear" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
      Settings
</a>
</nav>


    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
  <a href="/pedroid/blog/blob/4f1c793cd34b4790d13a7d48d528bafe065cf209/library/prettify/prettify.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:722b3e2fbcdfdcbefbf69dbc74195268 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Find or create a branch…" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/pedroid/blog/blob/master/library/prettify/prettify.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/pedroid/blog/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="QfywhtNcangxnGnOn+XlxyOMobJu4pETwuoqHU270SH9lF3k4QjS/6hm7AKq9x2Po9oGBUujOKVeeQ6DP7E6zg==" /></div>
          <svg aria-hidden="true" class="octicon octicon-git-branch select-menu-item-icon" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            <div class="select-menu-item-text">
              <span class="select-menu-item-heading">Create branch: <span class="js-new-item-name"></span></span>
              <span class="description">from ‘master’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="master">
            <input type="hidden" name="path" id="path" value="library/prettify/prettify.js">
</form>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/pedroid/blog/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/pedroid/blog"><span>blog</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/pedroid/blog/tree/master/library"><span>library</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/pedroid/blog/tree/master/library/prettify"><span>prettify</span></a></span><span class="separator">/</span><strong class="final-path">prettify.js</strong>
    </div>
  </div>


  <include-fragment class="commit-tease" src="/pedroid/blog/contributors/master/library/prettify/prettify.js">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
      <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>

  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/pedroid/blog/raw/master/library/prettify/prettify.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/pedroid/blog/blame/master/library/prettify/prettify.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/pedroid/blog/commits/master/library/prettify/prettify.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="x-github-client://openRepo/https://github.com/pedroid/blog?branch=master&amp;filepath=library%2Fprettify%2Fprettify.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/pedroid/blog/edit/master/library/prettify/prettify.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jlSRfNihRNsyFEjnYrE5Kq0tX6V9pZ58dzsR/5wzmaKA8g7LruRvFcAdrUnvb5MLd+cV6CpS7SXlNxr4RQsB3w==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Edit this file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/pedroid/blog/delete/master/library/prettify/prettify.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="QfNutfYE34zuo6Gj8VcbbrO1MuPyzvPl7SIunXVoIxW6ghYPbrNpvG3uWhinXyCDJ/wjP57l6tqfqkF2EBE0Vg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete this file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      29 lines (28 sloc)
      <span class="file-info-divider"></span>
    13.3 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> q<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-c1">window</span>.<span class="pl-c1">PR_SHOULD_USE_CONTINUATION</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(){<span class="pl-k">function</span> <span class="pl-en">L</span>(<span class="pl-smi">a</span>){<span class="pl-k">function</span> <span class="pl-en">m</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> f<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>);<span class="pl-k">if</span>(f<span class="pl-k">!==</span><span class="pl-c1">92</span>)<span class="pl-k">return</span> f;<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">1</span>);<span class="pl-k">return</span>(f<span class="pl-k">=</span>r[b])<span class="pl-k">?</span>f<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span><span class="pl-k">&lt;=</span>b<span class="pl-k">&amp;&amp;</span>b<span class="pl-k">&lt;=</span><span class="pl-s"><span class="pl-pds">&quot;</span>7<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span><span class="pl-c1">parseInt</span>(<span class="pl-smi">a</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>),<span class="pl-c1">8</span>)<span class="pl-k">:</span>b<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>u<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>b<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span><span class="pl-c1">parseInt</span>(<span class="pl-smi">a</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">2</span>),<span class="pl-c1">16</span>)<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">1</span>)}function e(a){if(a&lt;32)return(a&lt;16?&quot;\\x0&quot;:&quot;\\x&quot;)+a.toString(16);a=String.fromCharCode(a);if(a===&quot;\\&quot;||a===&quot;-&quot;||a===&quot;[&quot;||a===&quot;]&quot;)a=&quot;\\&quot;+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">[],b<span class="pl-k">=</span>[],o<span class="pl-k">=</span>f[<span class="pl-c1">0</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span>,c<span class="pl-k">=</span>o<span class="pl-k">?</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-c1">0</span>,i<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-c1">length</span>;c<span class="pl-k">&lt;</span>i;<span class="pl-k">++</span>c){<span class="pl-k">var</span> j<span class="pl-k">=</span>f[c];<span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\\</span><span class="pl-c1">[bdsw]</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(j))<span class="pl-smi">a</span>.<span class="pl-c1">push</span>(j);<span class="pl-k">else</span>{<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-en">m</span>(j),d;c<span class="pl-k">+</span><span class="pl-c1">2</span><span class="pl-k">&lt;</span>i<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>f[c<span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">?</span>(d<span class="pl-k">=</span><span class="pl-en">m</span>(f[c<span class="pl-k">+</span><span class="pl-c1">2</span>]),c<span class="pl-k">+=</span><span class="pl-c1">2</span>)<span class="pl-k">:</span>d<span class="pl-k">=</span>j;<span class="pl-smi">b</span>.<span class="pl-c1">push</span>([j,d]);d<span class="pl-k">&lt;</span><span class="pl-c1">65</span><span class="pl-k">||</span>j<span class="pl-k">&gt;</span><span class="pl-c1">122</span><span class="pl-k">||</span>(d<span class="pl-k">&lt;</span><span class="pl-c1">65</span><span class="pl-k">||</span>j<span class="pl-k">&gt;</span><span class="pl-c1">90</span><span class="pl-k">||</span><span class="pl-smi">b</span>.<span class="pl-c1">push</span>([<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">65</span>,j)<span class="pl-k">|</span><span class="pl-c1">32</span>,<span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(d,<span class="pl-c1">90</span>)<span class="pl-k">|</span><span class="pl-c1">32</span>]),d<span class="pl-k">&lt;</span><span class="pl-c1">97</span><span class="pl-k">||</span>j<span class="pl-k">&gt;</span><span class="pl-c1">122</span><span class="pl-k">||</span><span class="pl-smi">b</span>.<span class="pl-c1">push</span>([<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">97</span>,j)<span class="pl-k">&amp;</span><span class="pl-k">-</span><span class="pl-c1">33</span>,<span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(d,<span class="pl-c1">122</span>)<span class="pl-k">&amp;</span><span class="pl-k">-</span><span class="pl-c1">33</span>]))}}<span class="pl-smi">b</span>.<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">f</span>){<span class="pl-k">return</span> a[<span class="pl-c1">0</span>]<span class="pl-k">-</span>f[<span class="pl-c1">0</span>]<span class="pl-k">||</span>f[<span class="pl-c1">1</span>]<span class="pl-k">-</span>a[<span class="pl-c1">1</span>]});f<span class="pl-k">=</span>[];j<span class="pl-k">=</span>[<span class="pl-c1">NaN</span>,<span class="pl-c1">NaN</span>];<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">&lt;</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>c)i<span class="pl-k">=</span>b[c],i[<span class="pl-c1">0</span>]<span class="pl-k">&lt;=</span>j[<span class="pl-c1">1</span>]<span class="pl-k">+</span><span class="pl-c1">1</span><span class="pl-k">?</span>j[<span class="pl-c1">1</span>]<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(j[<span class="pl-c1">1</span>],i[<span class="pl-c1">1</span>])<span class="pl-k">:</span><span class="pl-smi">f</span>.<span class="pl-c1">push</span>(j<span class="pl-k">=</span>i);b<span class="pl-k">=</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span>];o<span class="pl-k">&amp;&amp;</span><span class="pl-smi">b</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">b</span>.<span class="pl-smi">push</span>.<span class="pl-c1">apply</span>(b,a);<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">&lt;</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">f</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>c)i<span class="pl-k">=</span>f[c],<span class="pl-smi">b</span>.<span class="pl-c1">push</span>(<span class="pl-en">e</span>(i[<span class="pl-c1">0</span>])),i[<span class="pl-c1">1</span>]<span class="pl-k">&gt;</span>i[<span class="pl-c1">0</span>]<span class="pl-k">&amp;&amp;</span>(i[<span class="pl-c1">1</span>]<span class="pl-k">+</span><span class="pl-c1">1</span><span class="pl-k">&gt;</span>i[<span class="pl-c1">0</span>]<span class="pl-k">&amp;&amp;</span><span class="pl-smi">b</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>),<span class="pl-smi">b</span>.<span class="pl-c1">push</span>(<span class="pl-en">e</span>(i[<span class="pl-c1">1</span>])));<span class="pl-smi">b</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>);<span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c&lt;b;++c){var j=f[c];j===&quot;(&quot;?++i:&quot;\\&quot;===j.charAt(0)&amp;&amp;(j=+j.substring(1))&amp;&amp;j&lt;=i&amp;&amp;(d[j]=-1)}for(c=1;c&lt;d.length;++c)-1===d[c]&amp;&amp;(d[c]=++t);for(i=c=0;c&lt;b;++c)j=f[c],j===&quot;(&quot;?(++i,d[i]===void 0&amp;&amp;(f[c]=&quot;(?:&quot;)):&quot;\\&quot;===j.charAt(0)&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">(j<span class="pl-k">=</span><span class="pl-k">+</span><span class="pl-smi">j</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>))<span class="pl-k">&amp;&amp;</span>j<span class="pl-k">&lt;=</span>i<span class="pl-k">&amp;&amp;</span>(f[c]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>d[i]);<span class="pl-k">for</span>(i<span class="pl-k">=</span>c<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">&lt;</span>b;<span class="pl-k">++</span>c)<span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>f[c]<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>f[c<span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">&amp;&amp;</span>(f[c]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-smi">a</span>.<span class="pl-c1">ignoreCase</span><span class="pl-k">&amp;&amp;</span>s)<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">&lt;</span>b;<span class="pl-k">++</span>c)j<span class="pl-k">=</span>f[c],a<span class="pl-k">=</span><span class="pl-smi">j</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>),<span class="pl-smi">j</span>.<span class="pl-c1">length</span><span class="pl-k">&gt;=</span><span class="pl-c1">2</span><span class="pl-k">&amp;&amp;</span>a<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span>f[c]<span class="pl-k">=</span><span class="pl-en">h</span>(j)<span class="pl-k">:</span>a<span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span>(f[c]<span class="pl-k">=</span><span class="pl-smi">j</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">A-Za-z</span>]</span><span class="pl-pds">/</span>g</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>);<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(a<span class="pl-k">&amp;</span><span class="pl-k">-</span><span class="pl-c1">33</span>,a<span class="pl-k">|</span><span class="pl-c1">32</span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>}));<span class="pl-k">return</span> <span class="pl-smi">f</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)}<span class="pl-k">for</span>(<span class="pl-k">var</span> t<span class="pl-k">=</span><span class="pl-c1">0</span>,s<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>,l<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>,p<span class="pl-k">=</span><span class="pl-c1">0</span>,d<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">length</span>;p<span class="pl-k">&lt;</span>d;<span class="pl-k">++</span>p){<span class="pl-k">var</span> g<span class="pl-k">=</span>a[p];<span class="pl-k">if</span>(<span class="pl-smi">g</span>.<span class="pl-c1">ignoreCase</span>)l<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">a-z</span>]</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(<span class="pl-smi">g</span>.<span class="pl-c1">source</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\\</span>u<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-c1">a-f</span>]</span><span class="pl-k">{4}</span><span class="pl-k">|</span><span class="pl-cce">\\</span>x<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-c1">a-f</span>]</span><span class="pl-k">{2}</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-k">^</span>UXux]</span><span class="pl-pds">/</span>gi</span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>))){s<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;l<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-k">break</span>}}<span class="pl-k">for</span>(<span class="pl-k">var</span> r<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">{b<span class="pl-k">:</span><span class="pl-c1">8</span>,t<span class="pl-k">:</span><span class="pl-c1">9</span>,n<span class="pl-k">:</span><span class="pl-c1">10</span>,v<span class="pl-k">:</span><span class="pl-c1">11</span>,f<span class="pl-k">:</span><span class="pl-c1">12</span>,r<span class="pl-k">:</span><span class="pl-c1">13</span>},n<span class="pl-k">=</span>[],p<span class="pl-k">=</span><span class="pl-c1">0</span>,d<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">length</span>;p<span class="pl-k">&lt;</span>d;<span class="pl-k">++</span>p){g<span class="pl-k">=</span>a[p];<span class="pl-k">if</span>(<span class="pl-smi">g</span>.<span class="pl-smi">global</span><span class="pl-k">||</span><span class="pl-smi">g</span>.<span class="pl-c1">multiline</span>)<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>g);<span class="pl-smi">n</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(?:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-en">y</span>(g)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>)}<span class="pl-k">return</span> <span class="pl-c1">RegExp</span>(<span class="pl-smi">n</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>),l<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>gi<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>)}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if(&quot;BR&quot;===g||&quot;LI&quot;===g)h[s]=&quot;\n&quot;,t[s&lt;&lt;1]=y++,t[s++&lt;&lt;1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&amp;&amp;(g=p?g.replace(/\r\n?/g,&quot;\n&quot;):g.replace(/[\t\n\r ]+/g,&quot; &quot;),h[s]=g,t[s&lt;&lt;1]=y,y+=g.length,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">t[s<span class="pl-k">++</span><span class="pl-k">&lt;&lt;</span><span class="pl-c1">1</span><span class="pl-k">|</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>a)}}<span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-k">^</span><span class="pl-k">|</span><span class="pl-c1">\s</span>)nocode(?:<span class="pl-c1">\s</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,h<span class="pl-k">=</span>[],y<span class="pl-k">=</span><span class="pl-c1">0</span>,t<span class="pl-k">=</span>[],s<span class="pl-k">=</span><span class="pl-c1">0</span>,l;<span class="pl-smi">a</span>.<span class="pl-smi">currentStyle</span><span class="pl-k">?</span>l<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">currentStyle</span>.<span class="pl-c1">whiteSpace</span><span class="pl-k">:</span><span class="pl-c1">window</span>.<span class="pl-smi">getComputedStyle</span><span class="pl-k">&amp;&amp;</span>(l<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">defaultView</span>.<span class="pl-en">getComputedStyle</span>(a,q).<span class="pl-en">getPropertyValue</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>white-space<span class="pl-pds">&quot;</span></span>));<span class="pl-k">var</span> p<span class="pl-k">=</span>l<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>pre<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">l</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-c1">3</span>);<span class="pl-en">m</span>(a);<span class="pl-k">return</span>{a<span class="pl-k">:</span><span class="pl-smi">h</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\n</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),c<span class="pl-k">:</span>t}}function B(a,m,e,h){m&amp;&amp;(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,&quot;pln&quot;],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n&lt;z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>)c<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-k">else</span>{<span class="pl-k">var</span> i<span class="pl-k">=</span>h[<span class="pl-smi">f</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>)];<span class="pl-k">if</span>(i)o<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-c1">match</span>(i[<span class="pl-c1">1</span>]),b<span class="pl-k">=</span>i[<span class="pl-c1">0</span>];<span class="pl-k">else</span>{<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">&lt;</span>t;<span class="pl-k">++</span>c)<span class="pl-k">if</span>(i<span class="pl-k">=</span>m[c],o<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-c1">match</span>(i[<span class="pl-c1">1</span>])){b<span class="pl-k">=</span>i[<span class="pl-c1">0</span>];<span class="pl-k">break</span>}o<span class="pl-k">||</span>(b<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>)}<span class="pl-k">if</span>((c<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span><span class="pl-k">&gt;=</span><span class="pl-c1">5</span><span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>lang-<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">b</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-c1">5</span>))<span class="pl-k">&amp;&amp;!</span>(o<span class="pl-k">&amp;&amp;</span><span class="pl-k">typeof</span> o[<span class="pl-c1">1</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>))c<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>,b<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>;c<span class="pl-k">||</span>(r[f]<span class="pl-k">=</span>b)}i<span class="pl-k">=</span>d;d<span class="pl-k">+=</span><span class="pl-smi">f</span>.<span class="pl-c1">length</span>;<span class="pl-k">if</span>(c){c<span class="pl-k">=</span>o[<span class="pl-c1">1</span>];<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-c1">indexOf</span>(c),k<span class="pl-k">=</span>j<span class="pl-k">+</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>;o[<span class="pl-c1">2</span>]<span class="pl-k">&amp;&amp;</span>(k<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-c1">length</span><span class="pl-k">-</span>o[<span class="pl-c1">2</span>].<span class="pl-c1">length</span>,j<span class="pl-k">=</span>k<span class="pl-k">-</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>);b<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">5</span>);<span class="pl-en">B</span>(l<span class="pl-k">+</span>i,<span class="pl-smi">f</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,j),e,p);<span class="pl-en">B</span>(l<span class="pl-k">+</span>i<span class="pl-k">+</span>j,c,<span class="pl-en">C</span>(b,c),p);<span class="pl-en">B</span>(l<span class="pl-k">+</span>i<span class="pl-k">+</span>k,<span class="pl-smi">f</span>.<span class="pl-c1">substring</span>(k),e,p)}<span class="pl-k">else</span> <span class="pl-smi">p</span>.<span class="pl-c1">push</span>(l<span class="pl-k">+</span>i,b)}<span class="pl-smi">a</span>.<span class="pl-smi">e</span><span class="pl-k">=</span>p}<span class="pl-k">var</span> h<span class="pl-k">=</span>{},y;(<span class="pl-k">function</span>(){<span class="pl-k">for</span>(<span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">concat</span>(m),</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">l<span class="pl-k">=</span>[],p<span class="pl-k">=</span>{},d<span class="pl-k">=</span><span class="pl-c1">0</span>,g<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-c1">length</span>;d<span class="pl-k">&lt;</span>g;<span class="pl-k">++</span>d){<span class="pl-k">var</span> r<span class="pl-k">=</span>e[d],n<span class="pl-k">=</span>r[<span class="pl-c1">3</span>];<span class="pl-k">if</span>(n)<span class="pl-k">for</span>(<span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-smi">n</span>.<span class="pl-c1">length</span>;<span class="pl-k">--</span>k<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>;)h[<span class="pl-smi">n</span>.<span class="pl-c1">charAt</span>(k)]<span class="pl-k">=</span>r;r<span class="pl-k">=</span>r[<span class="pl-c1">1</span>];n<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>r;<span class="pl-smi">p</span>.<span class="pl-en">hasOwnProperty</span>(n)<span class="pl-k">||</span>(<span class="pl-smi">l</span>.<span class="pl-c1">push</span>(r),p[n]<span class="pl-k">=</span>q)}<span class="pl-smi">l</span>.<span class="pl-c1">push</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-pds">/</span></span>);y<span class="pl-k">=</span><span class="pl-en">L</span>(l)})();<span class="pl-k">var</span> t<span class="pl-k">=</span><span class="pl-smi">m</span>.<span class="pl-c1">length</span>;<span class="pl-k">return</span> e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push([&quot;str&quot;,/^(?:&#39;&#39;&#39;(?:[^&#39;\\]|\\[\S\s]|&#39;&#39;?(?=[^&#39;]))*(?:&#39;&#39;&#39;|$)|&quot;&quot;&quot;(?:[^&quot;\\]|\\[\S\s]|&quot;&quot;?(?=[^&quot;]))*(?:&quot;&quot;&quot;|$)|&#39;(?:[^&#39;\\]|\\[\S\s])*(?:&#39;|$)|&quot;(?:[^&quot;\\]|\\[\S\s])*(?:&quot;|$))/,q,&quot;&#39;\&quot;&quot;]):a.multiLineStrings?m.push([&quot;str&quot;,/^(?:&#39;(?:[^&#39;\\]|\\[\S\s])*(?:&#39;|$)|&quot;(?:[^&quot;\\]|\\[\S\s])*(?:&quot;|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">q,<span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-cce">\&quot;</span>`<span class="pl-pds">&quot;</span></span>])<span class="pl-k">:</span><span class="pl-smi">m</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&#39;(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n\r</span>&#39;<span class="pl-cce">\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">.</span>)<span class="pl-k">*</span>(?:&#39;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span>&quot;(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n\r</span>&quot;<span class="pl-cce">\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">.</span>)<span class="pl-k">*</span>(?:&quot;<span class="pl-k">|</span><span class="pl-k">$</span>))<span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>]);<span class="pl-smi">a</span>.<span class="pl-smi">verbatimStrings</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">e</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>@&quot;(?:<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">|</span>&quot;&quot;)<span class="pl-k">*</span>(?:&quot;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,q]);<span class="pl-k">var</span> h<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">hashComments</span>;h<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">a</span>.<span class="pl-smi">cStyleComments</span><span class="pl-k">?</span>(h<span class="pl-k">&gt;</span><span class="pl-c1">1</span><span class="pl-k">?</span><span class="pl-smi">m</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#(?:##(?:<span class="pl-c1">[<span class="pl-k">^</span>#]</span><span class="pl-k">|</span>#(?!##))<span class="pl-k">*</span>(?:###<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span><span class="pl-c1">.</span><span class="pl-k">*</span>)<span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span>])<span class="pl-k">:</span><span class="pl-smi">m</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#(?:(?:define<span class="pl-k">|</span>elif<span class="pl-k">|</span>else<span class="pl-k">|</span>endif<span class="pl-k">|</span>error<span class="pl-k">|</span>ifdef<span class="pl-k">|</span>include<span class="pl-k">|</span>ifndef<span class="pl-k">|</span>line<span class="pl-k">|</span>pragma<span class="pl-k">|</span>undef<span class="pl-k">|</span>warning)<span class="pl-k">\b</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n\r</span>]</span><span class="pl-k">*</span>)<span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span>]),<span class="pl-smi">e</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;(?:(?:(?:<span class="pl-cce">\.\.\/</span>)<span class="pl-k">*</span><span class="pl-k">|</span><span class="pl-cce">\/</span><span class="pl-k">?</span>)(?:<span class="pl-c1">[<span class="pl-c1">\w</span>-]</span><span class="pl-k">+</span>(?:<span class="pl-cce">\/</span><span class="pl-c1">[<span class="pl-c1">\w</span>-]</span><span class="pl-k">+</span>)<span class="pl-k">+</span>)<span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">\w</span>-]</span><span class="pl-k">+</span><span class="pl-cce">\.</span>h<span class="pl-k">|</span><span class="pl-c1">[<span class="pl-c1">a-z</span>]</span><span class="pl-c1">\w</span><span class="pl-k">*</span>)&gt;<span class="pl-pds">/</span></span>,q]))<span class="pl-k">:</span><span class="pl-smi">m</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n\r</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">q,<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span>]));<span class="pl-smi">a</span>.<span class="pl-smi">cStyleComments</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">e</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/\/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n\r</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>,q]),<span class="pl-smi">e</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/\*</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">*?</span>(?:<span class="pl-cce">\*\/</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,q]));<span class="pl-smi">a</span>.<span class="pl-smi">regexLiterals</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">e</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>lang-regex<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-k">^^</span><span class="pl-cce">\.</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-c1">[!+-]</span><span class="pl-k">|</span>!=<span class="pl-k">|</span>!==<span class="pl-k">|</span>#<span class="pl-k">|</span>%<span class="pl-k">|</span>%=<span class="pl-k">|</span>&amp;<span class="pl-k">|</span>&amp;&amp;<span class="pl-k">|</span>&amp;&amp;=<span class="pl-k">|</span>&amp;=<span class="pl-k">|</span><span class="pl-cce">\(</span><span class="pl-k">|</span><span class="pl-cce">\*</span><span class="pl-k">|</span><span class="pl-cce">\*</span>=<span class="pl-k">|</span><span class="pl-cce">\+</span>=<span class="pl-k">|</span>,<span class="pl-k">|</span>-=<span class="pl-k">|</span>-&gt;<span class="pl-k">|</span><span class="pl-cce">\/</span><span class="pl-k">|</span><span class="pl-cce">\/</span>=<span class="pl-k">|</span>:<span class="pl-k">|</span>::<span class="pl-k">|</span>;<span class="pl-k">|</span>&lt;<span class="pl-k">|</span>&lt;&lt;<span class="pl-k">|</span>&lt;&lt;=<span class="pl-k">|</span>&lt;=<span class="pl-k">|</span>=<span class="pl-k">|</span>==<span class="pl-k">|</span>===<span class="pl-k">|</span>&gt;<span class="pl-k">|</span>&gt;=<span class="pl-k">|</span>&gt;&gt;<span class="pl-k">|</span>&gt;&gt;=<span class="pl-k">|</span>&gt;&gt;&gt;<span class="pl-k">|</span>&gt;&gt;&gt;=<span class="pl-k">|</span><span class="pl-c1">[?@[^]</span><span class="pl-k">|</span><span class="pl-cce">\^</span>=<span class="pl-k">|</span><span class="pl-cce">\^\^</span><span class="pl-k">|</span><span class="pl-cce">\^\^</span>=<span class="pl-k">|</span>{<span class="pl-k">|</span><span class="pl-cce">\|</span><span class="pl-k">|</span><span class="pl-cce">\|</span>=<span class="pl-k">|</span><span class="pl-cce">\|\|</span><span class="pl-k">|</span><span class="pl-cce">\|\|</span>=<span class="pl-k">|</span>~<span class="pl-k">|</span>break<span class="pl-k">|</span>case<span class="pl-k">|</span>continue<span class="pl-k">|</span>delete<span class="pl-k">|</span>do<span class="pl-k">|</span>else<span class="pl-k">|</span>finally<span class="pl-k">|</span>instanceof<span class="pl-k">|</span>return<span class="pl-k">|</span>throw<span class="pl-k">|</span>try<span class="pl-k">|</span>typeof)<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-cce">\/</span>(?=<span class="pl-c1">[<span class="pl-k">^</span>*/]</span>)(?:<span class="pl-c1">[<span class="pl-k">^</span>/[<span class="pl-cce">\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">|</span><span class="pl-cce">\[</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\\\]</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span>)<span class="pl-k">*</span>(?:]<span class="pl-k">|</span><span class="pl-k">$</span>))<span class="pl-k">+</span><span class="pl-cce">\/</span>)<span class="pl-pds">/</span></span>]);(h<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">types</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">e</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>typ<span class="pl-pds">&quot;</span></span>,h]);a<span class="pl-k">=</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">keywords</span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">|</span> <span class="pl-k">$</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);<span class="pl-smi">a</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">e</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>kwd<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>^(?:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\s</span>,]</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>),q]);<span class="pl-smi">m</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-cce">\r\n\t\xa0</span><span class="pl-pds">&quot;</span></span>]);<span class="pl-smi">e</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>lit<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>@<span class="pl-c1">[$_<span class="pl-c1">a-z</span>][<span class="pl-c1">\w</span>$@]</span><span class="pl-k">*</span><span class="pl-pds">/</span>i</span>,q],[<span class="pl-s"><span class="pl-pds">&quot;</span>typ<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[@_]</span><span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">A-Z</span>]</span><span class="pl-k">+</span><span class="pl-c1">[<span class="pl-c1">a-z</span>][<span class="pl-c1">\w</span>$@]</span><span class="pl-k">*</span><span class="pl-k">|</span><span class="pl-c1">\w</span><span class="pl-k">+</span>_t<span class="pl-k">\b</span>)<span class="pl-pds">/</span></span>,q],[<span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[$_<span class="pl-c1">a-z</span>][<span class="pl-c1">\w</span>$@]</span><span class="pl-k">*</span><span class="pl-pds">/</span>i</span>,q],[<span class="pl-s"><span class="pl-pds">&quot;</span>lit<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:0x<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-c1">a-f</span>]</span><span class="pl-k">+</span><span class="pl-k">|</span>(?:<span class="pl-c1">\d</span>(?:_<span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">*</span><span class="pl-c1">\d</span><span class="pl-k">*</span>(?:<span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">*</span>)<span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-cce">\+</span>)(?:e<span class="pl-c1">[+-]</span><span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">?</span>)<span class="pl-c1">[<span class="pl-c1">a-z</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span>i</span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span>0123456789<span class="pl-pds">&quot;</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">?</span><span class="pl-pds">/</span></span>,q],[<span class="pl-s"><span class="pl-pds">&quot;</span>pun<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">.</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s\w</span><span class="pl-c1">&quot;-$</span>&#39;<span class="pl-c1">.</span>/@<span class="pl-cce">\\</span>`]</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>,q]);<span class="pl-k">return</span> <span class="pl-en">x</span>(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if(&quot;BR&quot;===a.nodeName)h(a),</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(a);<span class="pl-k">else</span> <span class="pl-k">for</span>(a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">firstChild</span>;a;a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">nextSibling</span>)<span class="pl-en">e</span>(a);<span class="pl-k">break</span>;case <span class="pl-c1">3</span><span class="pl-k">:</span>case <span class="pl-c1">4</span><span class="pl-k">:</span><span class="pl-k">if</span>(p){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">nodeValue</span>,d<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">match</span>(t);<span class="pl-k">if</span>(d){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-smi">d</span>.<span class="pl-c1">index</span>);<span class="pl-smi">a</span>.<span class="pl-c1">nodeValue</span><span class="pl-k">=</span>c;(b<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">substring</span>(<span class="pl-smi">d</span>.<span class="pl-c1">index</span><span class="pl-k">+</span>d[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>))<span class="pl-k">&amp;&amp;</span><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(<span class="pl-smi">s</span>.<span class="pl-c1">createTextNode</span>(b),<span class="pl-smi">a</span>.<span class="pl-c1">nextSibling</span>);<span class="pl-en">h</span>(a);c<span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(;<span class="pl-k">!</span><span class="pl-smi">a</span>.<span class="pl-c1">nextSibling</span>;)<span class="pl-k">if</span>(a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>,<span class="pl-k">!</span>a)<span class="pl-k">return</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-en">b</span>(<span class="pl-smi">a</span>.<span class="pl-c1">nextSibling</span>,<span class="pl-c1">0</span>),e;(e<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">e</span>.<span class="pl-c1">nodeType</span><span class="pl-k">===</span><span class="pl-c1">1</span>;)a<span class="pl-k">=</span>e;<span class="pl-smi">d</span>.<span class="pl-c1">push</span>(a)}<span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-k">^</span><span class="pl-k">|</span><span class="pl-c1">\s</span>)nocode(?:<span class="pl-c1">\s</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,t<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-c1">\n</span><span class="pl-pds">/</span></span>,s<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">ownerDocument</span>,l;<span class="pl-smi">a</span>.<span class="pl-smi">currentStyle</span><span class="pl-k">?</span>l<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">currentStyle</span>.<span class="pl-c1">whiteSpace</span><span class="pl-k">:</span><span class="pl-c1">window</span>.<span class="pl-smi">getComputedStyle</span><span class="pl-k">&amp;&amp;</span>(l<span class="pl-k">=</span><span class="pl-smi">s</span>.<span class="pl-c1">defaultView</span>.<span class="pl-en">getComputedStyle</span>(a,q).<span class="pl-en">getPropertyValue</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>white-space<span class="pl-pds">&quot;</span></span>));<span class="pl-k">var</span> p<span class="pl-k">=</span>l<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>pre<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">l</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-c1">3</span>);<span class="pl-k">for</span>(l<span class="pl-k">=</span><span class="pl-smi">s</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>LI<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">a</span>.<span class="pl-c1">firstChild</span>;)<span class="pl-smi">l</span>.<span class="pl-c1">appendChild</span>(<span class="pl-smi">a</span>.<span class="pl-c1">firstChild</span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> d<span class="pl-k">=</span>[l],g<span class="pl-k">=</span><span class="pl-c1">0</span>;g<span class="pl-k">&lt;</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>g)<span class="pl-en">e</span>(d[g]);m<span class="pl-k">===</span>(m<span class="pl-k">|</span><span class="pl-c1">0</span>)<span class="pl-k">&amp;&amp;</span>d[<span class="pl-c1">0</span>].<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>value<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">m);<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-smi">s</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>OL<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">r</span>.<span class="pl-c1">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>linenums<span class="pl-pds">&quot;</span></span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> n<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>,m<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">|</span><span class="pl-c1">0</span>)<span class="pl-k">||</span><span class="pl-c1">0</span>,g<span class="pl-k">=</span><span class="pl-c1">0</span>,z<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span>;g<span class="pl-k">&lt;</span>z;<span class="pl-k">++</span>g)l<span class="pl-k">=</span>d[g],<span class="pl-smi">l</span>.<span class="pl-c1">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>L<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(g<span class="pl-k">+</span>n)<span class="pl-k">%</span><span class="pl-c1">10</span>,<span class="pl-smi">l</span>.<span class="pl-c1">firstChild</span><span class="pl-k">||</span><span class="pl-smi">l</span>.<span class="pl-c1">appendChild</span>(<span class="pl-smi">s</span>.<span class="pl-c1">createTextNode</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\xa0</span><span class="pl-pds">&quot;</span></span>)),<span class="pl-smi">r</span>.<span class="pl-c1">appendChild</span>(l);<span class="pl-smi">a</span>.<span class="pl-c1">appendChild</span>(r)}function k(a,m){for(var e=m.length;--e&gt;=0;){var h=m[e];A.hasOwnProperty(h)?window.console&amp;&amp;console.warn(&quot;cannot override language handler %s&quot;,h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*&lt;/.test(m)?&quot;default-markup&quot;:&quot;default-code&quot;;return A[a]}function E(a){var m=</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">a</span>.<span class="pl-smi">g</span>;<span class="pl-k">try</span>{<span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-en">M</span>(<span class="pl-smi">a</span>.<span class="pl-smi">h</span>),h<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">a</span>;<span class="pl-smi">a</span>.<span class="pl-smi">a</span><span class="pl-k">=</span>h;<span class="pl-smi">a</span>.<span class="pl-smi">c</span><span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">c</span>;<span class="pl-smi">a</span>.<span class="pl-smi">d</span><span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-en">C</span>(m,h)(a);<span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>MSIE<span class="pl-k">\b</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-c1">navigator</span>.<span class="pl-c1">userAgent</span>),m<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\n</span><span class="pl-pds">/</span>g</span>,t<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">a</span>,s<span class="pl-k">=</span><span class="pl-smi">t</span>.<span class="pl-c1">length</span>,e<span class="pl-k">=</span><span class="pl-c1">0</span>,l<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>,p<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-c1">length</span>,h<span class="pl-k">=</span><span class="pl-c1">0</span>,d<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">e</span>,g<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span>,a<span class="pl-k">=</span><span class="pl-c1">0</span>;d[g]<span class="pl-k">=</span>s;<span class="pl-k">var</span> r,n;<span class="pl-k">for</span>(n<span class="pl-k">=</span>r<span class="pl-k">=</span><span class="pl-c1">0</span>;n<span class="pl-k">&lt;</span>g;)d[n]<span class="pl-k">!==</span>d[n<span class="pl-k">+</span><span class="pl-c1">2</span>]<span class="pl-k">?</span>(d[r<span class="pl-k">++</span>]<span class="pl-k">=</span>d[n<span class="pl-k">++</span>],d[r<span class="pl-k">++</span>]<span class="pl-k">=</span>d[n<span class="pl-k">++</span>])<span class="pl-k">:</span>n<span class="pl-k">+=</span><span class="pl-c1">2</span>;g<span class="pl-k">=</span>r;<span class="pl-k">for</span>(n<span class="pl-k">=</span>r<span class="pl-k">=</span><span class="pl-c1">0</span>;n<span class="pl-k">&lt;</span>g;){<span class="pl-k">for</span>(<span class="pl-k">var</span> z<span class="pl-k">=</span>d[n],f<span class="pl-k">=</span>d[n<span class="pl-k">+</span><span class="pl-c1">1</span>],b<span class="pl-k">=</span>n<span class="pl-k">+</span><span class="pl-c1">2</span>;b<span class="pl-k">+</span><span class="pl-c1">2</span><span class="pl-k">&lt;=</span>g<span class="pl-k">&amp;&amp;</span>d[b<span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">===</span>f;)b<span class="pl-k">+=</span><span class="pl-c1">2</span>;d[r<span class="pl-k">++</span>]<span class="pl-k">=</span>z;d[r<span class="pl-k">++</span>]<span class="pl-k">=</span>f;n<span class="pl-k">=</span>b}<span class="pl-k">for</span>(<span class="pl-smi">d</span>.<span class="pl-c1">length</span><span class="pl-k">=</span>r;h<span class="pl-k">&lt;</span>p;){<span class="pl-k">var</span> o<span class="pl-k">=</span>l[h<span class="pl-k">+</span><span class="pl-c1">2</span>]<span class="pl-k">||</span>s,c<span class="pl-k">=</span>d[a<span class="pl-k">+</span><span class="pl-c1">2</span>]<span class="pl-k">||</span>s,b<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(o,c),i<span class="pl-k">=</span>l[h<span class="pl-k">+</span><span class="pl-c1">1</span>],j;<span class="pl-k">if</span>(<span class="pl-smi">i</span>.<span class="pl-c1">nodeType</span><span class="pl-k">!==</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;</span>(j<span class="pl-k">=</span><span class="pl-smi">t</span>.<span class="pl-c1">substring</span>(e,b))){k<span class="pl-k">&amp;&amp;</span>(j<span class="pl-k">=</span><span class="pl-smi">j</span>.<span class="pl-c1">replace</span>(m,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r</span><span class="pl-pds">&quot;</span></span>));<span class="pl-smi">i</span>.<span class="pl-c1">nodeValue</span><span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">j;<span class="pl-k">var</span> u<span class="pl-k">=</span><span class="pl-smi">i</span>.<span class="pl-c1">ownerDocument</span>,v<span class="pl-k">=</span><span class="pl-smi">u</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>SPAN<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">v</span>.<span class="pl-c1">className</span><span class="pl-k">=</span>d[a<span class="pl-k">+</span><span class="pl-c1">1</span>];<span class="pl-k">var</span> x<span class="pl-k">=</span><span class="pl-smi">i</span>.<span class="pl-c1">parentNode</span>;<span class="pl-smi">x</span>.<span class="pl-c1">replaceChild</span>(v,i);<span class="pl-smi">v</span>.<span class="pl-c1">appendChild</span>(i);e<span class="pl-k">&lt;</span>o<span class="pl-k">&amp;&amp;</span>(l[h<span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>i<span class="pl-k">=</span><span class="pl-smi">u</span>.<span class="pl-c1">createTextNode</span>(<span class="pl-smi">t</span>.<span class="pl-c1">substring</span>(b,o)),<span class="pl-smi">x</span>.<span class="pl-c1">insertBefore</span>(i,<span class="pl-smi">v</span>.<span class="pl-c1">nextSibling</span>))}e<span class="pl-k">=</span>b;e<span class="pl-k">&gt;=</span>o<span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">+=</span><span class="pl-c1">2</span>);e<span class="pl-k">&gt;=</span>c<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">+=</span><span class="pl-c1">2</span>)}}<span class="pl-k">catch</span>(w){<span class="pl-s"><span class="pl-pds">&quot;</span>console<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> <span class="pl-c1">window</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">console</span>.<span class="pl-c1">log</span>(w<span class="pl-k">&amp;&amp;</span><span class="pl-smi">w</span>.<span class="pl-smi">stack</span><span class="pl-k">?</span><span class="pl-smi">w</span>.<span class="pl-smi">stack</span><span class="pl-k">:</span>w)}}<span class="pl-k">var</span> v<span class="pl-k">=</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>break,continue,do,else,for,if,return,while<span class="pl-pds">&quot;</span></span>],w<span class="pl-k">=</span>[[v,<span class="pl-s"><span class="pl-pds">&quot;</span>auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof<span class="pl-pds">&quot;</span></span>],<span class="pl-c1">F</span><span class="pl-k">=</span>[w,<span class="pl-s"><span class="pl-pds">&quot;</span>alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where<span class="pl-pds">&quot;</span></span>],<span class="pl-c1">G</span><span class="pl-k">=</span>[w,<span class="pl-s"><span class="pl-pds">&quot;</span>abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">H</span><span class="pl-k">=</span>[<span class="pl-c1">G</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var<span class="pl-pds">&quot;</span></span>],w<span class="pl-k">=</span>[w,<span class="pl-s"><span class="pl-pds">&quot;</span>debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN<span class="pl-pds">&quot;</span></span>],<span class="pl-c1">I</span><span class="pl-k">=</span>[v,<span class="pl-s"><span class="pl-pds">&quot;</span>and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">J</span><span class="pl-k">=</span>[v,<span class="pl-s"><span class="pl-pds">&quot;</span>alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END<span class="pl-pds">&quot;</span></span>],v<span class="pl-k">=</span>[v,<span class="pl-s"><span class="pl-pds">&quot;</span>case,done,elif,esac,eval,fi,function,in,local,set,then,until<span class="pl-pds">&quot;</span></span>],<span class="pl-c1">K</span><span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(DIR<span class="pl-k">|</span>FILE<span class="pl-k">|</span>vector<span class="pl-k">|</span>(de<span class="pl-k">|</span>priority_)<span class="pl-k">?</span>queue<span class="pl-k">|</span>list<span class="pl-k">|</span>stack<span class="pl-k">|</span>(const_)<span class="pl-k">?</span>iterator<span class="pl-k">|</span>(multi)<span class="pl-k">?</span>(set<span class="pl-k">|</span>map)<span class="pl-k">|</span>bitset<span class="pl-k">|</span>u<span class="pl-k">?</span>(int<span class="pl-k">|</span>float)<span class="pl-c1">\d</span><span class="pl-k">*</span>)<span class="pl-pds">/</span></span>,<span class="pl-c1">N</span><span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\S</span><span class="pl-pds">/</span></span>,<span class="pl-c1">O</span><span class="pl-k">=</span><span class="pl-en">u</span>({keywords<span class="pl-k">:</span>[<span class="pl-c1">F</span>,<span class="pl-c1">H</span>,w,<span class="pl-s"><span class="pl-pds">&quot;</span>caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">I</span>,<span class="pl-c1">J</span>,v],hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multiLineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,regexLiterals<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),<span class="pl-c1">A</span><span class="pl-k">=</span>{};<span class="pl-en">k</span>(<span class="pl-c1">O</span>,[<span class="pl-s"><span class="pl-pds">&quot;</span>default-code<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">x</span>([],[[<span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-k">^</span>&lt;?]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>dec<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;!<span class="pl-c1">\w</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>(?:&gt;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;<span class="pl-cce">\!</span>--<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">*?</span>(?:--<span class="pl-cce">\&gt;</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;<span class="pl-cce">\?</span>(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">+?</span>)(?:<span class="pl-cce">\?</span>&gt;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;%(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">+?</span>)(?:%&gt;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>pun<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&lt;<span class="pl-c1">[%?]</span><span class="pl-k">|</span><span class="pl-c1">[%?]</span>&gt;)<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;xmp<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">+?</span>)&lt;<span class="pl-cce">\/</span>xmp<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-js<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;script<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">*?</span>)(&lt;<span class="pl-cce">\/</span>script<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;)<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-css<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;style<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">*?</span>)(&lt;<span class="pl-cce">\/</span>style<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;)<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-in.tag<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(&lt;<span class="pl-cce">\/</span><span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">a-z</span>][<span class="pl-k">^</span>&lt;&gt;]</span><span class="pl-k">*</span>&gt;)<span class="pl-pds">/</span>i</span>]]),</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">[<span class="pl-s"><span class="pl-pds">&quot;</span>default-markup<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>htm<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>html<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>mxml<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>xhtml<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>xml<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>xsl<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">x</span>([[<span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-cce">\t\r\n</span><span class="pl-pds">&quot;</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>atv<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&quot;<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">*</span>&quot;<span class="pl-k">?</span><span class="pl-k">|</span>&#39;<span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span><span class="pl-k">*</span>&#39;<span class="pl-k">?</span>)<span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>]],[[<span class="pl-s"><span class="pl-pds">&quot;</span>tag<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^^</span>&lt;<span class="pl-cce">\/</span><span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">a-z</span>]</span>(?:<span class="pl-c1">[<span class="pl-c1"><span class="pl-cce">\w</span>-.</span>:]</span><span class="pl-k">*</span><span class="pl-c1">\w</span>)<span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-cce">\/</span><span class="pl-k">?</span>&gt;<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>atn<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?!style<span class="pl-c1">[<span class="pl-c1">\s</span>=]</span><span class="pl-k">|</span>on)<span class="pl-c1">[<span class="pl-c1">a-z</span>]</span>(?:<span class="pl-c1">[<span class="pl-c1">\w</span>:-]</span><span class="pl-k">*</span><span class="pl-c1">\w</span>)<span class="pl-k">?</span><span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-uq.val<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>&quot;&#39;&gt;]</span><span class="pl-k">*</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>&quot;&#39;/&gt;]</span><span class="pl-k">|</span><span class="pl-cce">\/</span>(?=<span class="pl-c1">\s</span>)))<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>pun<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[/<span class="pl-c1">&lt;-&gt;</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-js<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>on<span class="pl-c1">\w</span><span class="pl-k">+</span><span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>&quot;(<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">+</span>)&quot;<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-js<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>on<span class="pl-c1">\w</span><span class="pl-k">+</span><span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>&#39;(<span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span><span class="pl-k">+</span>)&#39;<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-js<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>on<span class="pl-c1">\w</span><span class="pl-k">+</span><span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>&quot;&#39;&gt;]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-css<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>style<span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>&quot;(<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">+</span>)&quot;<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-css<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>style<span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>&#39;(<span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span><span class="pl-k">+</span>)&#39;<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-css<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>style<span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>&quot;&#39;&gt;]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>]]),[<span class="pl-s"><span class="pl-pds">&quot;</span>in.tag<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">x</span>([],[[<span class="pl-s"><span class="pl-pds">&quot;</span>atv<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>]]),[<span class="pl-s"><span class="pl-pds">&quot;</span>uq.val<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">u</span>({keywords<span class="pl-k">:</span><span class="pl-c1">F</span>,hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,types<span class="pl-k">:</span><span class="pl-c1">K</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>c<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>cc<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>cpp<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>cxx<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>cyc<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>m<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">u</span>({keywords<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>null,true,false<span class="pl-pds">&quot;</span></span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">u</span>({keywords<span class="pl-k">:</span><span class="pl-c1">H</span>,hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,verbatimStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,types<span class="pl-k">:</span><span class="pl-c1">K</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>cs<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">u</span>({keywords<span class="pl-k">:</span><span class="pl-c1">G</span>,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>java<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">u</span>({keywords<span class="pl-k">:</span>v,hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multiLineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>bsh<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>csh<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>sh<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">u</span>({keywords<span class="pl-k">:</span><span class="pl-c1">I</span>,hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multiLineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,tripleQuotedStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">[<span class="pl-s"><span class="pl-pds">&quot;</span>cv<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>py<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">u</span>({keywords<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END<span class="pl-pds">&quot;</span></span>,hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multiLineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,regexLiterals<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>perl<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>pl<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>pm<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">u</span>({keywords<span class="pl-k">:</span><span class="pl-c1">J</span>,hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multiLineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,regexLiterals<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>rb<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">u</span>({keywords<span class="pl-k">:</span>w,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,regexLiterals<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>js<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">u</span>({keywords<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">hashComments<span class="pl-k">:</span><span class="pl-c1">3</span>,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multilineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,tripleQuotedStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,regexLiterals<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>coffee<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">k</span>(<span class="pl-en">x</span>([],[[<span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>]]),[<span class="pl-s"><span class="pl-pds">&quot;</span>regex<span class="pl-pds">&quot;</span></span>]);<span class="pl-c1">window</span>.<span class="pl-en">prettyPrintOne</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">m</span>,<span class="pl-smi">e</span>){<span class="pl-k">var</span> h<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>PRE<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">h</span>.<span class="pl-smi">innerHTML</span><span class="pl-k">=</span>a;e<span class="pl-k">&amp;&amp;</span><span class="pl-en">D</span>(h,e);<span class="pl-en">E</span>({g<span class="pl-k">:</span>m,i<span class="pl-k">:</span>e,h<span class="pl-k">:</span>h});<span class="pl-k">return</span> <span class="pl-smi">h</span>.<span class="pl-smi">innerHTML</span>};<span class="pl-c1">window</span>.<span class="pl-en">prettyPrint</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">function</span> <span class="pl-en">m</span>(){<span class="pl-k">for</span>(<span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-c1">window</span>.<span class="pl-c1">PR_SHOULD_USE_CONTINUATION</span><span class="pl-k">?</span><span class="pl-smi">l</span>.<span class="pl-en">now</span>()<span class="pl-k">+</span><span class="pl-c1">250</span><span class="pl-k">:</span><span class="pl-c1">Infinity</span>;p<span class="pl-k">&lt;</span><span class="pl-smi">h</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">l</span>.<span class="pl-en">now</span>()<span class="pl-k">&lt;</span>e;p<span class="pl-k">++</span>){<span class="pl-k">var</span> n<span class="pl-k">=</span>h[p],k<span class="pl-k">=</span><span class="pl-smi">n</span>.<span class="pl-c1">className</span>;<span class="pl-k">if</span>(<span class="pl-smi">k</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>prettyprint<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>){<span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-c1">match</span>(g),f,b;<span class="pl-k">if</span>(b<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-k">!</span>k){b<span class="pl-k">=</span>n;<span class="pl-k">for</span>(<span class="pl-k">var</span> o<span class="pl-k">=</span><span class="pl-k">void</span> <span class="pl-c1">0</span>,c<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">firstChild</span>;c;c<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">nextSibling</span>)<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">nodeType</span>,o<span class="pl-k">=</span>i<span class="pl-k">===</span><span class="pl-c1">1</span><span class="pl-k">?</span>o<span class="pl-k">?</span>b<span class="pl-k">:</span>c<span class="pl-k">:</span>i<span class="pl-k">===</span><span class="pl-c1">3</span><span class="pl-k">?</span><span class="pl-c1">N</span>.<span class="pl-c1">test</span>(<span class="pl-smi">c</span>.<span class="pl-c1">nodeValue</span>)<span class="pl-k">?</span>b<span class="pl-k">:</span>o<span class="pl-k">:</span>o;b<span class="pl-k">=</span>(f<span class="pl-k">=</span>o<span class="pl-k">===</span>b<span class="pl-k">?</span><span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">:</span>o)<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>CODE<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">f</span>.<span class="pl-c1">tagName</span>}b<span class="pl-k">&amp;&amp;</span>(k<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-c1">className</span>.<span class="pl-c1">match</span>(g));k<span class="pl-k">&amp;&amp;</span>(k<span class="pl-k">=</span>k[<span class="pl-c1">1</span>]);b<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-k">for</span>(o<span class="pl-k">=</span><span class="pl-smi">n</span>.<span class="pl-c1">parentNode</span>;o;o<span class="pl-k">=</span><span class="pl-smi">o</span>.<span class="pl-c1">parentNode</span>)<span class="pl-k">if</span>((<span class="pl-smi">o</span>.<span class="pl-c1">tagName</span><span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>pre<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span><span class="pl-smi">o</span>.<span class="pl-c1">tagName</span><span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>code<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span><span class="pl-smi">o</span>.<span class="pl-c1">tagName</span><span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>xmp<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">o</span>.<span class="pl-c1">className</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">o</span>.<span class="pl-c1">className</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>prettyprint<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>){b<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">break</span>}b<span class="pl-k">||</span>((b<span class="pl-k">=</span>(b<span class="pl-k">=</span><span class="pl-smi">n</span>.<span class="pl-c1">className</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>linenums<span class="pl-k">\b</span>(?::(<span class="pl-c1">\d</span><span class="pl-k">+</span>))<span class="pl-k">?</span><span class="pl-pds">/</span></span>))<span class="pl-k">?</span>b[<span class="pl-c1">1</span>]<span class="pl-k">&amp;&amp;</span>b[<span class="pl-c1">1</span>].<span class="pl-c1">length</span><span class="pl-k">?</span><span class="pl-k">+</span>b[<span class="pl-c1">1</span>]<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span><span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">1</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-en">D</span>(n,b),d<span class="pl-k">=</span>{g<span class="pl-k">:</span>k,h<span class="pl-k">:</span>n,i<span class="pl-k">:</span>b},<span class="pl-en">E</span>(d))}}p<span class="pl-k">&lt;</span><span class="pl-smi">h</span>.<span class="pl-c1">length</span><span class="pl-k">?</span><span class="pl-c1">setTimeout</span>(m,</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">250</span>)<span class="pl-k">:</span>a<span class="pl-k">&amp;&amp;</span><span class="pl-en">a</span>()}<span class="pl-k">for</span>(<span class="pl-k">var</span> e<span class="pl-k">=</span>[<span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>pre<span class="pl-pds">&quot;</span></span>),<span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>code<span class="pl-pds">&quot;</span></span>),<span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>xmp<span class="pl-pds">&quot;</span></span>)],h<span class="pl-k">=</span>[],k<span class="pl-k">=</span><span class="pl-c1">0</span>;k<span class="pl-k">&lt;</span><span class="pl-smi">e</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>k)<span class="pl-k">for</span>(<span class="pl-k">var</span> t<span class="pl-k">=</span><span class="pl-c1">0</span>,s<span class="pl-k">=</span>e[k].<span class="pl-c1">length</span>;t<span class="pl-k">&lt;</span>s;<span class="pl-k">++</span>t)<span class="pl-smi">h</span>.<span class="pl-c1">push</span>(e[k][t]);<span class="pl-k">var</span> e<span class="pl-k">=</span>q,l<span class="pl-k">=</span><span class="pl-c1">Date</span>;<span class="pl-smi">l</span>.<span class="pl-smi">now</span><span class="pl-k">||</span>(l<span class="pl-k">=</span>{<span class="pl-en">now</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span><span class="pl-k">+</span><span class="pl-k">new</span> <span class="pl-en">Date</span>}});<span class="pl-k">var</span> p<span class="pl-k">=</span><span class="pl-c1">0</span>,d,g<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>lang(?:uage)<span class="pl-k">?</span>-(<span class="pl-c1">[<span class="pl-c1">\w.</span>]</span><span class="pl-k">+</span>)(?!<span class="pl-c1">\S</span>)<span class="pl-pds">/</span></span>;<span class="pl-en">m</span>()};<span class="pl-c1">window</span>.<span class="pl-c1">PR</span><span class="pl-k">=</span>{createSimpleLexer<span class="pl-k">:</span>x,registerLangHandler<span class="pl-k">:</span>k,sourceDecorator<span class="pl-k">:</span>u,<span class="pl-c1">PR_ATTRIB_NAME</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>atn<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">PR_ATTRIB_VALUE</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>atv<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">PR_COMMENT</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">PR_DECLARATION</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>dec<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">PR_KEYWORD</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>kwd<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">PR_LITERAL</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>lit<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">PR_NOCODE</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>nocode<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">PR_PLAIN</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">PR_PUNCTUATION</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>pun<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">PR_SOURCE</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">PR_STRING</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">PR_TAG</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>tag<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">PR_TYPE</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>typ<span class="pl-pds">&quot;</span></span>}})();</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg aria-hidden="true" class="octicon" height="16" version="1.1" viewBox="0 0 13 4" width="14">
        <g stroke="none" stroke-width="1" fill-rule="evenodd">
            <g transform="translate(-1.000000, -6.000000)">
                <path d="M2.5,9.5 C1.67157288,9.5 1,8.82842712 1,8 C1,7.17157288 1.67157288,6.5 2.5,6.5 C3.32842712,6.5 4,7.17157288 4,8 C4,8.82842712 3.32842712,9.5 2.5,9.5 Z M7.5,9.5 C6.67157288,9.5 6,8.82842712 6,8 C6,7.17157288 6.67157288,6.5 7.5,6.5 C8.32842712,6.5 9,7.17157288 9,8 C9,8.82842712 8.32842712,9.5 7.5,9.5 Z M12.5,9.5 C11.6715729,9.5 11,8.82842712 11,8 C11,7.17157288 11.6715729,6.5 12.5,6.5 C13.3284271,6.5 14,7.17157288 14,8 C14,8.82842712 13.3284271,9.5 12.5,9.5 Z"></path>
            </g>
        </g>
      </svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><a class="js-zeroclipboard dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</a></li>
        <li><a class="js-zeroclipboard dropdown-item" id= "js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</a></li>
        <li><a href="/pedroid/blog/blame/4f1c793cd34b4790d13a7d48d528bafe065cf209/library/prettify/prettify.js" class="dropdown-item js-update-url-with-hash" id="js-view-git-blame">View git blame</a></li>
          <li><a href="/pedroid/blog/issues/new" class="dropdown-item" id="js-new-issue">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2017 <span title="0.16529s from unicorn-2031511686-057cv">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-kO4IRl30AFXbobbN8akpieAMTwfYBby7HBg788ye2vQ=" src="https://assets-cdn.github.com/assets/frameworks-90ee08465df40055dba1b6cdf1a92989e00c4f07d805bcbb1c183bf3cc9edaf4.js"></script>
    
    <script async="async" crossorigin="anonymous" integrity="sha256-WqVX1ds6kr+FBWxdaqbdqer3FX1cFvQ+2+WPXSI7BMw=" src="https://assets-cdn.github.com/assets/github-5aa557d5db3a92bf85056c5d6aa6dda9eaf7157d5c16f43edbe58f5d223b04cc.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

