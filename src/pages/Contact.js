import { useLocation } from 'react-router-dom'

export default function Contact() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)

    const name = queryParams.get("name")
    // console.log(name)

    return(
        <div>
            <h2>Hey {name}, Contact us here...</h2>
            <p>Curabitizzle izzle you son of a bizzle go to hizzle nisi hizzle mollis. Suspendisse boom shackalack. Morbi odio. Fizzle neque. Izzle dang. Crizzle maurizzle ghetto, fo shizzle mah nizzle fo rizzle, mah home g-dizzle nizzle, feugizzle sizzle amizzle, fizzle izzle, gangsta. Pellentesque owned. Vestibulizzle check it out, break yo neck, yall in, sagittis sizzle, mah nizzle sempizzle, velizzle. Cras in ipsum. The bizzle volutpizzle i saw beyonces tizzles and my pizzle went crizzle vizzle check out this. Crizzle quis crackalackin black purus ornare. Gangster phat justo et boom shackalack. Nunc urna. Suspendisse venenatizzle placerat lacizzle. Curabitizzle bow wow wow ante. Nunc pharetra, hizzle sure shiznit hendrerizzle, stuff felizzle sizzle, brizzle aliquizzle magna felizzle luctizzle pede. Nam a i saw beyonces tizzles and my pizzle went crizzle. Tellivizzle izzle taciti owned izzle go to hizzle rizzle per conubia yippiyo, izzle inceptizzle hymenaeos. Aliquam cool, dang fizzle shiz nonummy, fo shizzle orci viverra leo, izzle shizzle my nizzle crocodizzle risizzle arcu away sizzle</p>
        </div>
    )
}