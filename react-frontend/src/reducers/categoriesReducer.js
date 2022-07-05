import {
    GET_CATEGORY,
    GET_CATEGORY_BY_ROOT,
  } from "../actions/types";
  
  const initialState = {
    categories: [
      {
        blog_id: '79',
        category_name: 'Education',
        emp_name: 'Phuong',
        blog_title: 'Education là gì? Education có nguồn gốc từ đâu?',
        blog_content: '<h2>&nbsp;</h2>\r\n\r\n<p><strong>EXCLUSIVE&nbsp;</strong>&ndash; An&nbsp;<a href="https://www.foxnews.com/category/us/us-regions/west/oregon" target="_blank">Oregon elementary school taught kids</a>&nbsp;that they should not be &quot;color blind&quot; to the race of their peers, according to course materials.&nbsp;</p>\r\n\r\n<p>Errol Hassell Elementary in Beaverton taught a 21-day antiracist curriculum as part of a school-wide initiative for the first days of January 2022.&nbsp;<a href="https://www.foxnews.com/category/us/education/curriculum" target="_blank">The curriculum instructed elementary children to describe their race</a>, informed them about microaggressions and systemic racism.</p>\r\n\r\n<p><img alt="" src="/userfiles/files/Education.jpg" style="height:225px; width:400px" /></p>\r\n\r\n<p>Errol Hassell Elementary School in Oregon had a 21-day antiracist challenge.&nbsp;(Fox News&nbsp;)</p>\r\n\r\n<p>&quot;This challenge is for all of us, staff and students,&quot; the curriculum said. &quot;Each day, for the first 21 school days of 2022, we will gather as a&nbsp;<a href="https://www.foxnews.com/media/california-charter-schools-social-justice-crucial-future-education" target="_blank">school and learn about social justice</a>&nbsp;together.&quot;</p>\r\n\r\n<p>Teachers were also instructed that if a child asked a question that made them feel uncomfortable, they should &quot;write them down&quot; and a staff member would come in and address them.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Errol Hassell Elementary school information on antiracist mission &#39;for teachers only.&#39;&nbsp;(Fox News&nbsp;)</p>\r\n\r\n<p>In discussion questions they were asked, &quot;Why is being color blind not the best choice?&quot; and &quot;What are some invisible ways that racism shows up in our lives?&quot;</p>\r\n\r\n<p><a href="https://www.foxnews.com/media/oregon-bipoc-teachers-claims-eye-rolling-example-harmful-practice-rooted-white-supremacy" target="_blank"><strong>OREGON &#39;BIPOC&#39; TEACHERS CLAIMS EYE-ROLLING IS AN EXAMPLE OF A &#39;HARMFUL PRACTICE ROOTED IN WHITE SUPREMACY&#39;</strong></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Errol Hassell Elementary School taught children why being color blind &#39;is not the best choice,&#39; according to curriculum reviewed by Fox News Digital.&nbsp;(Fox News&nbsp;)</p>\r\n\r\n<p>On the first day, students were asked to &quot;Think of one or two words that describe the color of your skin&quot; and &quot;draw or paint a self-portrait.&quot;</p>\r\n\r\n<p>However, the curriculum cautioned that kids had to &quot;ask&hellip; permission&quot; and had to use &quot;the appropriate colors.&quot;</p>\r\n\r\n<p>&quot;You may include another other person in your picture, but make sure to ask their permission and use the appropriate colors to show the of shade their skin,&quot; the curriculum said.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Errol Hassel Elementary school in the Beaverton School District taught kids a 21-day challenge on racism as part of their &#39;antiracist&#39; mission.&nbsp;(Fox News&nbsp;)</p>\r\n\r\n<p><a href="https://www.foxnews.com/media/oregon-school-district-books-contains-pornographic-sex-acts" target="_blank"><strong>OREGON SCHOOL DISTRICT BOOKS CONTAIN PORNOGRAPHIC IMAGERY OF SEX ACTS, ACCORDING TO PORTAL</strong></a></p>\r\n\r\n<p>Another day of the challenge focused on &quot;defining microaggressions&quot; and addressed &quot;how to respond&quot; when another kid microaggresses them. The curriculum said that kids should &quot;talk to a grown up about it.&quot;</p>\r\n\r\n<p>&quot;Microaggressions are defined as every day, subtle, intentional or unintentional interactions or behaviors that communicate some sort of bias toward historically marginalized groups,&quot; the curriculum said. &quot;These can be comments, interactions, body language or other behaviors that make a person or group of people feel less than another person or group.&quot;</p>',
        blog_thumbnail_name: '1656907721-thumbnail.jpg',
        blog_video_name: 'https://www.youtube.com/watch?v=T-JVpKku5SI',
        blog_day_open: '2022-07-04 04:08:41'
      },
      {
        blog_id: '82',
        category_name: 'Economy',
        emp_name: 'Phuong',
        blog_title: 'Political experts weigh economy\'s impact on midterm',
        blog_content: '<p>The economy has taken a massive tumble in recent months and some political experts are questioning just how much it will impact the upcoming&nbsp;as inflation soars to its highest rate in four decades and gas prices reach record highs.</p>\r\n\r\n<p>The U.S.&nbsp;was among the highest in the developed world in April and May, far out-pacing Japan, France, Germany, the U.K., Italy and Canada. President Biden&#39;s administration has scrambled to find an answer to inflation and spiking gas prices, which remain near $5 per gallon nationally.</p>\r\n\r\n<p>To better understand how the economy will impact the elections, or whether it will at all, Fox News Digital contacted four political experts to get their assessment.</p>\r\n\r\n<p><img alt="" src="/userfiles/files/growth.jpg" style="height:267px; width:400px" /></p>\r\n\r\n<p>Kellyanne Conway, former White House counselor to President Trump, Ari Fleischer, former White House press secretary and Fox News contributor; and Tulsi Gabbard, former Democratic congresswoman from Hawaii&nbsp;(Lou Rocco/ABC, Amy Sussman, Anna Moneymaker - Getty Images)</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>Tulsi Gabbard, former U.S. congresswoman from Hawaii and 2020 Democratic presidential candidate:</h3>\r\n\r\n<p>&quot;I think the most important thing is that Americans across the country are looking for solutions. People are already struggling right now, tremendously, because of inflation, because of rising gas prices. People don&#39;t feel safe in their own communities. You know, the value of the dollar is dropping as things get more and more expensive and people are having a hard time making ends meet. I think what they&#39;re looking for, regardless of political party, are leaders who are going to bring solutions and actually take action to start to address these problems.</p>\r\n\r\n<p>&quot;I&#39;m sitting here in Washington, D.C., right now and very cognizant of the reality about how disconnected most of our political leaders are from that struggle and that frustration reality that Americans across the country are already facing. &hellip; When people hear messages coming from the White House like &lsquo;We may be entering a recession, but it&rsquo;s really not gonna be that bad,&#39; things are already bad. Things are alreadyand it just further increases their lack of faith and confidence that people in Washington even know what they&#39;re going through when they hear statements like that. People want solutions, so that is what they&#39;ll be looking for now, and as we go forward.</p>\r\n\r\n<p>&quot;There is way too much focus on quote-unquote messaging, or changing the messaging, or improving the messaging, or the narrative. What does that have to do with reality? You can say things are gonna be different or better, but unless people are actually seeing action, unless people are actually seeing steps forward towards progress and solving these challenges, all they will continue to hear is a lot of lip service&hellip;&quot;</p>\r\n\r\n<p><img alt="" src="/userfiles/files/growth.jpg" style="height:267px; width:400px" /></p>\r\n\r\n<p>&nbsp;</p>',
        blog_thumbnail_name: '1656908091-thumbnail.jpg',
        blog_video_name: 'https://www.youtube.com/watch?v=lqJLDlxu68k',
        blog_day_open: '2022-07-04 04:14:51'
      },
      {
        blog_id: '83',
        category_name: 'Global Economy',
        emp_name: 'Phuong',
        blog_title: 'Putin critic Navalny transferred to one of Russia\'s \'toughest, most torturous penal colonies\'',
        blog_content: '<p>Putin critic Alexei Navalny has been unexpectedly&nbsp;hat his supporters are describing as &quot;one of the toughest and most torturous in Russia&quot;.&nbsp;</p>\r\n\r\n<p>Thwho received a 9-year sentence in March after being convicted of fraud charges he argues are politically-motivated &ndash; was taken from&nbsp;Correctional Colony No.2. in Prokov, about 65 miles outside&nbsp;of Moscow, to the IK-6 penal colony farther east in&nbsp;Melekhovo, according to Russian state media.&nbsp;</p>\r\n\r\n<p>&quot;Even if the reports about Navalny being transfer<img alt="" src="/userfiles/files/KsrrC394HJ5n99ZHjmh9TOdtuw1GsiUr2wy2g0sOtdE.jpg" style="height:381px; width:400px" />red to the Melekhovo Penal Colony are true, it is hardly a relief. This colony is known to be one of the toughest and most torturous in Russia,&quot; Anna Veduta, the vice president of the Navalny-founded Anti-Corruption Foundation, said in a statement obtained by Fox News. &nbsp;</p>\r\n\r\n<p>&quot;Before Navalny&rsquo;s appeal to a nine-year sentence in a maximum-security prison was upheld, there were already rumors he would be transferred to this colony,&quot; Veduta&rsquo;s statement added. &quot;Navalny passed a message saying: &lsquo;the prisoners from the strict regime colony &#39;Melekhovo&#39; write that prison authorities are equipping a &#39;prison within a prison&#39; for me there. They say that if you Google &#39;Melekhovo&#39; there will be stories of how they pull out convicts&#39; nails.&quot;&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Russian opposition leader Alexei Navalny is seen on a screen via a video link from the IK-2 corrective penal colony in Pokrov during a court hearing to consider an appeal against his prison sentence in Moscow, Russia, on Tuesday, May 24.&nbsp;(REUTERS/Evgenia Novozhenina)</p>\r\n\r\n<p>Navalny&rsquo;s spokesperson said Tuesday that his legal team wasn&rsquo;t made aware of the transfer.&nbsp;</p>\r\n\r\n<p>Kira Yarmysh tweeted that Navalny&rsquo;s lawyer went to visit him at the Correctional Colony No. 2 facility, but after waiting at a checkpoint, was told by staff there that &quot;there is no such convict here.&quot;&nbsp;</p>',
        blog_thumbnail_name: '1656908243-thumbnail.jpg',
        blog_video_name: 'https://www.youtube.com/watch?v=lqJLDlxu68k',
        blog_day_open: '2022-07-04 04:17:23'
      },
      {
        blog_id: '84',
        category_name: 'Environment',
        emp_name: 'Phuong',
        blog_title: 'Tropical Storm Agatha expected to become hurricane over Eastern Pacific',
        blog_content: '<p>A tropical depression in the Eastern Pacific Ocean formed into Tropical Storm Agatha on Saturday, becoming the first named stor</p>\r\n\r\n<p>At 7 a.m. CDT, it was located about 220 miles southwest of Puerto Angel, Mexico, and moving toward the west near 5 mph.</p>\r\n\r\n<p>Tas expected to become a hurricane on Sunday as it approaches souther<img alt="" src="/userfiles/files/unit-18-environment-res.jpg" style="height:267px; width:400px" />n Mexico.&nbsp;</p>\r\n\r\n<p>A Hurricane Watch was issued for portions of the southern coast of Mexico, from Salina Cruz to Punta Maldonado.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Hurricane conditions are possible within that area on Monday, with the potential for tropical storm conditions late Sunday.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Tropical Storm Agatha over the Eastern Pacific&nbsp;(NOAA NWS National Hurricane Center)</p>\r\n\r\n<p>&quot;There is an increasing risk of tropical-storm-force and hurricane-force winds along portions of the southern coast of Mexico in the next two to three days, and a Hurricane Watch is now in effect for portions of this area.&quot; the agency said. &quot;Interests in this area should closely monitor the progress of this system and updates to the forecast.&quot;&nbsp;</p>\r\n\r\n<p>&quot;Heavy rain associated with Agatha will develounday and continue through Tuesday. This will pose a threat of potentially life-threatening flash flooding and mudslides,&quot; it said.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Fox Weather reported that meteorologists say Tropical Storm Agatha could have winds reaching 90 mph.&nbsp;</p>\r\n\r\n<p>Forecasters say it will bring the threat of flash flooding and heavy rainfall.</p>',
        blog_thumbnail_name: '1656908436-thumbnail.jpg',
        blog_video_name: 'https://www.youtube.com/watch?v=QQYgCxu988s',
        blog_day_open: '2022-07-04 04:20:36'
      },
      {
        blog_id: '87',
        category_name: 'House',
        emp_name: 'Phuong',
        blog_title: 'January 6 committee\'s Kinzinger: Secret Service agent who',
        blog_content: '<p>Rep. Adam Kinzinger, R-Ill., claimed Thursday that a Secret Service agent who may testify before the Jan. 6 committee about the timeline of events that unfolded arouthe riot &quot;likes to lie.&quot;</p>\r\n\r\n<p>A series of social media posts accumulated this week in which collea</p>\r\n\r\n<p>&quot; claimed Olivia Troye, former White House Homeland Security advisor under Mike Pence. &quot;First this one with Keith Kellogg in &#39;I Alone Can Fix It&#39; [and] now he&rsquo;s denying the story he told Cassidy Hutchinson. Those of us who worked w/ Tony know where his loyalties lie. He should testify under oath.&quot;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&quot;Tony Ornato lied about me too,&quot; said CNN&#39;s Alyssa Farah Griffin. &quot;During the protests at Lafayette Sq. in 2020, I told Mark Meadows [and] Ornato they needed to warn press staged there before clearing the square. Meadows replied: &lsquo;We aren&rsquo;t doing that<img alt="" src="/userfiles/files/hyde-park-house-robeson-architects_1.jpg" style="height:267px; width:400px" />.&rsquo;&quot;&nbsp;</p>\r\n\r\n<p>She added, &quot;Tony later lied [and] said the exchange never happened. He knows it did.&quot;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The whirlwind of attacks on Ornato&#39;s trustworthiness caught the attention of Kinzinger, who publicly commented that Ornato lies often.</p>',
        blog_thumbnail_name: '1656908609-thumbnail.jpg',
        blog_video_name: 'https://www.youtube.com/watch?v=eFGOS6oW_vw',
        blog_day_open: '2022-07-04 04:23:29'
      },
      {
        blog_id: '88',
        category_name: 'TV',
        emp_name: 'Phuong',
        blog_title: '\'StrangerThings\' part two premiere causes Netflix to crash',
        blog_content: '<p>The part two&nbsp;<a href="https://www.foxnews.com/category/entertainment/tv" target="_blank">premiere of &quot;Stranger Things&quot;</a>&nbsp;Season four reportedly caused Netflix to crash, subscribers reported.</p>\r\n\r\n<p><a href="https://www.foxbusiness.com/category/netflix" target="_blank">Netflix dropped part two</a>&nbsp;of the latest seaso<img alt="" src="/userfiles/files/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg" style="height:330px; width:220px" />n Friday, weeks after dropping the first part of the season on May 27.</p>\r\n\r\n<p>The first part included seven episodes, while part two includes the final two episodes of Season four.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>However, once the episodes hit the streaming platform at 3 a.m. EST, many users took to social media to complain Netflix had crashed.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The premiere of part two of &quot;Stranger Things&quot; Season four crashed Netflix.&nbsp;(REUTERS/Monica Almeida/File Photo)</p>\r\n\r\n<p><a href="https://www.foxnews.com/entertainment/netflix-stranger-things-season-4-warning-card" target="_blank"><strong>NETFLIX&#39;S &lsquo;STRANGER THINGS&#39; SEASON 4 ADDS WARNING CARD FOLLOWING TEXAS SCHOOL SHOOTING</strong></a></p>\r\n\r\n<p>&quot;anyones else&rsquo;s netflix crashed? i&rsquo;m assuming too many ppl online waiting for volume 2,&quot; one user wrote.</p>\r\n\r\n<p>&quot;i know y&#39;all did not just make Netflix crash,&quot; another wrote.</p>\r\n\r\n<p>&quot;I did not just count down the seconds like it&#39;s New Years for Netflix to crash,&quot; another added.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Millie Bobby Brown as Eleven in &quot;Stranger Things.&quot;&nbsp;(&nbsp;Courtesy of Netflix &copy; 2022)</p>\r\n\r\n<p>&nbsp;</p>',
        blog_thumbnail_name: '1656908718-thumbnail.jpg',
        blog_video_name: 'https://www.youtube.com/watch?v=eFGOS6oW_vw',
        blog_day_open: '2022-07-04 04:25:18'
      }
    ],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
  
      case GET_CATEGORY:
        return {
          ...state,
          //categories: action.payload
        };
  
      case GET_CATEGORY_BY_ROOT:
        return {
          ...state,
          categories: state.categories.filter(
            (category) => category.category_root === action.payload
          )
        };
  
      default:
        return state;
    }
  }
  