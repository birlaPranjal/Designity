import designdemo from '@/../public/assets/designdemo.svg'
const designify = {
    faqs: {
        faq1: {
            question: "What is the theme of the competition?",
            answer: "The theme of the competition is 'Future of Digital Interaction'. Participants are encouraged to design innovative and user-friendly interfaces that envision the future of digital experiences."
        },
        faq2: {
            question: "Who can participate in the competition?",
            answer: "The competition is open to everyone, including students, professionals, and hobbyists. There are no restrictions on age or experience level."
        },
        faq3: {
            question: "What tools can I use for my design?",
            answer: "Participants can use any design tools they are comfortable with, such as Adobe XD, Figma, Sketch, InVision, or any other software that helps in creating UI/UX designs."
        },
        faq4: {
            question: "What are the judging criteria?",
            answer: "Designs will be judged based on creativity, usability, innovation, visual appeal, and how well they align with the competition theme. A panel of experienced UI/UX designers will evaluate the entries."
        },
        faq5: {
            question: "What is the submission deadline?",
            answer: "The submission deadline for the competition is June 30, 2024. All entries must be submitted through the official competition portal by 11:59 PM (IST) on that date."
        }
    },
    content: {
        welcome: {
            title: "Welcome to Wittyhacks!",
            description: "Whether you’re writing your first lines of HTML, building a VR app or a hoverboard, Wittyhacks is just the place for you. We will have workshops and mentors to help make your idea happen. You will be able to exhibit your skills without worrying about any mortal needs. We will take care of everything :)",
            image: {designdemo}
        },
        makeNewFriends: {
            title: "Make New Friends",
            description: "Wittyhacks provides a brilliant opportunity for you and your team to forge professional contacts and make new friends. With over 250 developers and designers gathering from all over the country in Indore, grab your chance of connecting with people to discuss ideas and opportunities.",
            image: {designdemo}
        },
        learn: {
            title: "Learn and Grow",
            description: "Hackathons are a great way to give back to the community. Mentoring beginners is always helpful for them and rewarding for us. We’re going to have mentors from a number of different organizations present at the venue. Whenever you’re stuck on a problem or need suggestions they'll always be within a hand’s reach.",
            image: {designdemo}
        },
        build: {
            title: "Build Something Amazing",
            description: "This year we are inviting not just students but everyone to build on ideas of their choice. Watching software materialize from pure thought, part by part is the closest to experiencing magic we have ever got to. And we’re excited to see that magic happen all over again!",
            image: {designdemo}
        }
    },
    prizes : [
        {
          id: "02",
          prize: "11,133.97 $ worth Prizes",
          background: "from-purple-400 to-purple-600",
          details: "2nd Runner up",
          credits: ["5000 $ worth Credits", "1000 $ worth Credits", "83.98 $ worth Credits"],
        },
        {
          id: "01",
          prize: "6085.07 $ worth Prizes",
          background: "from-blue-600 to-purple-500",
          details: "1st Runner up",
          credits: ["5000 $ worth Credits", "1000 $ worth Credits", "83.98 $ worth Credits"],
        },
        {
          id: "03",
          prize: "3048.54 $ worth Prizes",
          background: "from-teal-400 to-blue-500",
          details: "3rd Runner up",
          credits: ["5000 $ worth Credits", "1000 $ worth Credits", "83.98 $ worth Credits"],
        }
    ]
};

export default designify;
