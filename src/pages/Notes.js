import Reac, { useEffect, useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TopAppBar from '../components/AppBar'; 

const testObj = [
    {
        heading: 'Ancient Sumerian Literature',
        body: 'The earliest known literature comes from ancient Sumer (modern-day Iraq). The "Epic of Gilgamesh," a narrative poem from around 2100 BCE, is one of the oldest surviving pieces of literature. It recounts the adventures of Gilgamesh, a Sumerian king, and explores themes of heroism, friendship, and the quest for immortality.'
    },
    {
        heading: 'Ancient Egyptian Literature',
        body: 'Ancient Egyptian literature includes a range of texts, such as the Pyramid Texts and the Coffin Texts, which were inscribed on tombs and coffins to guide the deceased in the afterlife. The "Story of Sinuhe," an epic poem, is one of the most notable works, reflecting themes of exile and return.'
    },
    {
        heading: 'Classical Greek Literature',
        body: 'Greek literature flourished from the 8th to the 4th century BCE. Homer’s epics, the "Iliad" and the "Odyssey," are foundational texts of Western literature. Greek drama, including the works of Aeschylus, Sophocles, and Euripides, introduced tragedy and comedy as important literary forms, exploring themes of fate, morality, and human nature.'
    },
    {
        heading: 'Classical Roman Literature',
        body: 'Roman literature emerged around the 3rd century BCE, with writers like Virgil, whose epic "Aeneid" drew on Homeric tradition to narrate the mythical origins of Rome. Ovids Metamorphoses and Ciceros oratory also stand out, reflecting the Romans contributions to epic poetry, elegy, and rhetoric.'
    },
    {
        heading: 'Medieval European Literature',
        body: 'During the medieval period, literature in Europe was characterized by the use of vernacular languages and the blending of Christian themes with traditional epic forms. Notable works include Dante Alighieri’s "Divine Comedy," which depicts an allegorical journey through Hell, Purgatory, and Heaven, and Geoffrey Chaucer’s "The Canterbury Tales," a collection of stories told by pilgrims on their way to Canterbury.'
    },
    {
        heading: 'Early Renaissance Literature',
        body: 'The early Renaissance saw a revival of classical themes and the rise of humanism. Petrarch’s sonnets and Boccaccio’s "Decameron" exemplify this period’s focus on individual experience and human emotion. The literature of this time began to emphasize personal expression and the exploration of human nature.'
    },
    {
        heading: 'Elizabethan Drama',
        body: 'The late 16th century, under Queen Elizabeth I, witnessed the flourishing of English drama. Playwrights like Christopher Marlowe and William Shakespeare brought dramatic literature to new heights. Marlowe’s "Tamburlaine" and Shakespeare’s plays, including "Hamlet," "Macbeth," and "Romeo and Juliet," reflect the period’s exploration of complex characters and themes.'
    },
    {
        heading: 'The Rise of Shakespeare',
        body: 'William Shakespeare (1564–1616) is often regarded as the greatest playwright in the English language. His extensive body of work includes 39 plays, 154 sonnets, and 2 long narrative poems. His plays, such as "Hamlet," "Othello," "King Lear," and "A Midsummer Night’s Dream," showcase his mastery of language, character development, and dramatic structure, making him a central figure in Western literature.'
    }
];

const TextBlock = ({ heading, body }) => {
    return (
        <Accordion sx={{ width: '60%', mb: 2 }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-content"
                id="panel-header"
            >
                <Typography variant="h6">{heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">{body}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default function Notes() {
    return (
        <main>
            <TopAppBar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', paddingTop: '32px' }}>
                <Typography variant='h2' sx={{paddingBottom: '32px'}}>
                    Introduction to Literature
                </Typography>
                {testObj.map((item, index) => (
                    <TextBlock
                        key={index}
                        heading={item.heading}
                        body={item.body}
                    />
                ))}
            </Box>
        </main>
    );
}