const mainBtn = document.querySelector(".btn");

mainBtn.addEventListener("click", () => { 
    const instance = basicLightbox.create(`
      <div class="modal">
          <p class="modal-text">Дашуляяя, Дашулечкааа, любимая моя, поздравляю тебя с днем рождения, с 16-ти летием, желаю тебе чтобы ты была счастливой, болела поменьше) чтобы все твои мечты и цели сбывались, да вообще чтобы в жизни все было по кайфу. Хочу сказать тебе спасибо за то что ты есть в моей жизни, я вообще не представляю как я все это время жил без тебя и что было бы если бы не познакомились, я очень люблю и ценю тебя, ты самое лучшее что случалось со мной в этой жизни!! Ты такая красивая, ну я просто не могу, твоя улыбка, твои глаза это просто НЕЧТО, смотря в них я чувствую спокойствие та и вообще находясь рядом с тобой я чувствую себя нужным и любимым, спасибо тебе за это. Я бы никогда не подумал что с первого раза встречу того самого человека с которым мне будет ТААААК комфортно, что это будет понимающий меня и поддерживающий человек, смотря на которого я просто желаю быть вместе всегда. ТЫ ПРЕКРАСНА И ЭТО ФАКТ. Я очень сильно тебя люблю, вот ПРОСТО ОБОЖАЮ <3 Писав это сообщение у меня в голове прокручивались все моменты проведенные с тобой и мне так приятно от этого на душе, потомучто это прекрасно! Прости меня за все что я делаю не так, за то что бываю скучным, уделяю мало внимания, просто знай что я всегда рад тебе помочь и что ты можешь на меня положиться, ты ведь моя девушка. ЛЮБЛЮ ТЕБЯ ОООООООЧЕНЬ СИЛЬНО, ТАК СИЛЬНО ЧТО ТЫ ДАЖЕ ПРЕДСТАВИТЬ НЕ МОЖЕШЬ, СПАСИБО ТЕБЕ ЗА ВСЕ ♥</p>
      </div>
  `)
  
  instance.show();
})