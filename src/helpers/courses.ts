import { Course } from "types/Global";

export const courses : Course[] = [
    {
        title: "PHP Course",
        desc: "Server side scripting language to build web apps in few hours.",
        last_update: "09 Sept 2022",
        tags: ['#Backend'],
        sessions: [{
            session_name: "Introduction",
            topics: [{
                topic_name: "What is PHP?",
                topic_notes: "PHP(short for Hypertext PreProcessor) is the most widely used open source and general purpose server side scripting language used mainly in web development to create dynamic websites and applications."
            },{
                topic_name: "Why PHP?",
                topic_notes: "It's easy, fast, constantly updated and there is a wide market of specialists who can work with it."
            }]
        },{
            session_name: "Syntax",
            topics: [{
                topic_name: "Basic Syntax",
                topic_notes: "A PHP script starts with <?php and ends with ?>:"
            },{
                topic_name: "Comments",
                topic_notes: "// This is a single-line comment \n # This is also a single-line comment."
            }]
        }]
    },
    {
        title: "Node Js Course",
        desc: "Server side scripting language to build web apps in few hours.",
        last_update: "09 Sept 2022",
        tags: ['#Backend'],
        sessions: [{
            session_name: "Introduction",
            topics: [{
                topic_name: "What is PHP?",
                topic_notes: "PHP(short for Hypertext PreProcessor) is the most widely used open source and general purpose server side scripting language used mainly in web development to create dynamic websites and applications."
            },{
                topic_name: "Why PHP?",
                topic_notes: "It's easy, fast, constantly updated and there is a wide market of specialists who can work with it."
            }]
        }]
    },
    {
        title: "Flutter Course",
        desc: "Server side scripting language to build web apps in few hours.",
        last_update: "09 Sept 2022",
        tags: ['#Mobile App'],
        sessions: [{
            session_name: "Introduction",
            topics: [{
                topic_name: "What is PHP?",
                topic_notes: "PHP(short for Hypertext PreProcessor) is the most widely used open source and general purpose server side scripting language used mainly in web development to create dynamic websites and applications."
            },{
                topic_name: "Why PHP?",
                topic_notes: "It's easy, fast, constantly updated and there is a wide market of specialists who can work with it."
            }]
        }]
    },
]
