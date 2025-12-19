const quotes = [
  {
    quote: "And we're dying with every step we take, we're dying with every breath we make ~March to the Sea (Self Titled, 2009)",
    explanation: "From the time we're born, we're already dying. That's weird and pretty morbid to think about, but it's important to realize that we're not guaranteed the next step or even the next breath. So we have to live while we're dying."
  },
  {
    quote: "Nothing kills a man faster than his own head ~Trapdoor (Self Titled, 2009)",
    explanation: "We're the only ones standing in the way of everything we want."
  },
  {
    quote: "Please don't be afraid of what your soul is really thinking ~Isle of Flightless Birds (Self Titled, 2009)",
    explanation: "Don't be afraid if your thoughts and opinions don't align with everyone else's. Don't be afraid if you believe in something bigger than yourself."
  },
  {
    quote: "I don't wanna be heard; I want to be listened to ~Forest (Regional at Best, 2011)",
    explanation: "Personally, one of the reasons I don't feel the need to talk much is because I almost never feel like anyone is paying attention to my words. I don't want people to hear what I'm saying and just forget about it or don't care about what I say, I want them to truly listen."
  },
  {
    quote: "I don't understand why everything I adore takes a different form when I squint my eyes. Have you ever done that? When you squint your eyes and your eyelashes make it look a little not right and then when just enough light comes from just the right side and you find you're not who you're supposed to be? ~Forest (Regional at Best, 2011)",
    explanation: "When we take a step back out of our bubbles to see that not everything is going to go as we originally planned, it's kind of a psychological thing. We paint this perfect picture in our minds of exactly what we want our life to be like and when it doesn't turn out that way, we wonder why.  Asking if anyone has ever done that makes us wonder if we're the only one suffering in this way. Finding out you're not who you're supposed to be is recognizing that you're becoming a changed person, which could be a good thing, whether you realize it at first or not."
  },
  {
    quote: "We all are stranger creatures than when we all started out as kids, culture forbids ~Glowing Eyes (Regional at Best, 2011)",
    explanation: "I love how it says that we're creatures. It seems like a negative thing to be called, like something society would call anyone who doesn't want to live up to all the norms and standards, but we as the different ones, freaks, or creatures embrace it. Culture would not only forbid that we be creatures, but also that we wouldn't care to be called that. I'd like to think I was a pretty strange kid growing up, but I think I'm even stranger now that my mind is more developed and I am able to truly think for myself and become more informed without the obstruction of a society that's working against me. I know that my thoughts and opinions are unique to me and that Im not a sheep. My mind is no longer as easily molded as it was when I was much younger. And that's cool."
  },
  {
    quote: "Are you searching for purpose? Then write something, yeah it might be worthless ~Kitchen Sink (Regional at Best, 2011)",
    explanation: "This is important because its saying that your purpose is found in creating something that only you understand, and it doesn't matter if someone else thinks it's worthless, as long as it has meaning to you, personally."
  },
  { 
    quote: "While you're doing fine, there's some people and I who have a really tough time getting through this life so excuse us while we sing to the sky” ~Screen (Vessel, 2013).",
    explanation: "You're not the only one having trouble with life, and this is trying to remind you of that, and to let you know that it's okay to not be okay."
  },
  { 
    quote: "Don't wanna call you in the nighttime, don't wanna give you all my pieces, don't wanna hand you all my trouble, don't wanna give you all my demons. You'll have to watch me struggle from several rooms away. But tonight. I'll need you to stay.” ~The Run and Go (Vessel, 2013)",
    explanation: "I think this has a lot to do with not wanting to be a burden on people and not wanting to make yourself too vulnerable, but then realizing that you can help yourself by letting them in. You don't want to overwhelm them with your problems, but at the same time, they may actually be able to help."
  },
  {
    quote: "I'm so afraid of what you have to say cause I am quiet now and silence gives you space” ~Fake You Out (Vessel, 2013)",
    explanation: "Being yourself putting yourself out there is scary. As soon as I stop talking (or writing), a space opens up for others to pick everything apart and interpret it in their own way, whether it is in the way I intended it to come across or not, which is actually kind of terrifying."
  },
  {
    quote: "I need to know that when I fail you'll still be here, 'cause if you stick around I'll sing you pretty sounds, and we'll make money selling your hair. I don't care what's in your hair; I just wanna know what's on your mind. I used to say, ‘I wanna die before I'm old,’ but because of you I might think twice” ~We Don't Believe What's on T.V. (Blurryface, 2015)",
    explanation: "I think we all want to have that reassurance in knowing that there will always be someone there for us, even when we make mistakes. When we find that person, we won't care about anything else, just as long as they stay by our side through everything. They'll be important enough to live for."   
];

const button = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");
const explanationText = document.getElementById("explanationText");

button.onclick = function () {
  const random = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = "Quote: " + quotes[random].quote;
  explanationText.textContent = "Explanation: " + quotes[random].explanation;
};
