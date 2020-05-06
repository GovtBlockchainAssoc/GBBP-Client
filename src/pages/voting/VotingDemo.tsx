import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: { width: '100%', },
    justify: { textAlign: 'justify' },
    highlighted: { backgroundColor: "#b3e5fc" },
    noDisplay: { display: 'none' },
    button: { marginTop: theme.spacing(1), marginRight: theme.spacing(1), },
    actionsContainer: { marginBottom: theme.spacing(2), },
    resetContainer: { padding: theme.spacing(3), },
    message: { marginTop: 20 },
    help: { color: '#0000FF', },
}));

const steps = ['Problem Statement', 'Receive Ballot', 'Vote', 'Turn Into 3 Ballots', 'Pick Verification Columns', 'Transmit & Get Receipts', 'Finish'];

export default function VerticalLinearStepper() {
    const classes = useStyles();
    const [voteStep, setvoteStep] = useState(0);

    const verbiage = [
        <div className={classes.justify}><p>One of the barriers to blockchain voting is that most people don't know that it IS possible to make a vote both verifiable and anonymous --  while, also, preventing people from selling their votes.</p>
            <p>In 2006, an MIT professor, Ron Rivest, figured out that by giving each voter three ballots: one verifiable and two anonymous that any vote alteration or destruction has a 1 / 3 chance of being detected without revealing how the voter actually voted.</p>
            <p>With some simple software, it is possible to give a voter a single standard ballot, reap the advantages of the three ballot system and avoid its disadvantages (correlation attacks) -- all without making the voting process unduly onerous.</p>
            <p>This demo shows how this works. </p></div>,

        <div className={classes.justify}><p>First, the voter starts with a standard ballot.</p>
            <p>Behind the scenes, the blockchain passes the software three encryption keys and one decryption key for each office or ballot question.</p>
            <p>In our example, since there are two offices and one question, the blockchain will pass nine encryption keys and three decryption keys.</p></div >,

        <div className={classes.justify}><p>The voter just votes normally.</p><p>The software will, of course, prevent them from filling in too many boxes.</p></div>,

        <div className={classes.justify}><p>Once the voter is done, the software randomly divides the ballot into three ballots (as shown).</p>
            <p>Each option that the voter voted for is marked on two of the ballots. Each option that the voter did not vote for is marked on one ballot.</p>
            <p>After votes are counted and totalled, the number of voters is subtracted from each line to leave the correct vote count for each line.</p></div>,

        <div className={classes.justify}><p>Then, the voter picks whch columns they wish to be able to verify.  In this case, it amused the voter to pick columns 3, 1 and 3 again.</p>
            <p>Any attempt to alter the vote before it hits the immutable blockchain has a one-third chance of being provably detected.</p>
            <p>Note, also, that any one column is *not* sufficient to prove how the voter voted.</p></div>,

        <div className={classes.justify}><p>The software then sends all nine ballots (three for each office or question) to the blockchain.</p>
            <p>Once their vote is recorded, the voter is given a receipt for each question or office showing only their picked columns and a QR code encoding a URL that retrieves them from the blockchain and decrypts them.</p>
            <p>And, again, note that the receipts don't give any indication of how the voter actually voted -- thus not providing the proof necessary for a voter to sell their vote.</p></div>,

        <div className={classes.justify}><p>After the voter goes home, they can always use their cell phone and the QR code to check the blockchain and verify that their selected columns are recorded correctly</p>
            <p>If their vote was altered before transmission, it is a simple matter to prove that there is a problem when the receipt doesn't match the blockchain.</p></div>
    ]

    const handleNext = () => { setvoteStep(voteStep + 1); };
    const handleBack = () => { setvoteStep(voteStep - 1); };
    const handleReset = () => { setvoteStep(0); };

    return (<table>
        <tr><td style={{ width: '20%' }}><div className={classes.root}>
            <Stepper activeStep={voteStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <table><tr><td>{voteStep === index ? <Typography className={classes.message}>{}</Typography> : null}</td></tr></table>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button disabled={voteStep === 0} onClick={handleBack} className={classes.button} >Back</Button>
                                    <Button disabled={false} variant="contained" color="primary" onClick={handleNext} className={classes.button} >
                                        {voteStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {voteStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} className={classes.button}>Reset</Button>
                </Paper>
            )}
        </div></td>
            <td>  &nbsp;  &nbsp;  &nbsp; </td>
            <td><table className={voteStep > 0 && voteStep < 6 ? '' : classes.noDisplay}>
                <tr><td colSpan={5}>Local Delegate - choose one</td></tr>
                <tr><td colSpan={5}><hr /></td></tr>
                <tr><td>Awesome Leader</td><td rowSpan={3}> &nbsp; </td><td rowSpan={3}><img className={voteStep == 5 ? '' : classes.noDisplay} src="..\src\images\QR1.png" width={"70 px"} /></td><td rowSpan={3}> &nbsp; </td><td><input type="checkbox" checked={voteStep > 1 && voteStep < 5 ? true : false} /></td><td> &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; </td><td>{voteStep > 2 ? 'X' : ''}</td><td> &nbsp; &nbsp; &nbsp; </td>
                    <td>{voteStep > 2 ? 'X' : ''}</td><td> &nbsp; &nbsp; &nbsp; </td><td className={voteStep > 3 ? classes.highlighted : ''}></td><td></td><td></td><td> &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; </td></tr>
                <tr><td>Dismal Failure</td><td><input type="checkbox" /></td><td></td><td></td><td> &nbsp; </td>
                    <td>{voteStep > 2 ? 'X' : ''}</td><td></td><td className={voteStep > 3 ? classes.highlighted : ''}></td><td></td><td></td></tr>
                <tr><td>Sociopath</td><td><input type="checkbox" checked={voteStep > 4 ? true : false} /></td><td></td><td></td><td> &nbsp; </td>
                    <td></td><td></td><td className={voteStep > 3 ? classes.highlighted : ''}>{voteStep > 2 ? 'X' : ''}</td><td></td><td></td></tr>
                <tr><td><br /></td></tr>
                <tr><td colSpan={5}>At-Large Delegates - choose two</td></tr>
                <tr><td colSpan={5}><hr /></td></tr>
                <tr><td>Exceptional Woman</td><td></td><td></td><td></td><td><input type="checkbox" checked={voteStep > 1 ? true : false} /></td><td></td><td className={voteStep > 3 ? classes.highlighted : ''}>{voteStep > 2 ? 'X' : ''}</td><td> &nbsp; </td>
                    <td>{voteStep > 2 ? 'X' : ''}</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>Great Man</td><td></td><td></td><td></td><td><input type="checkbox" checked={voteStep > 1 && voteStep < 5 ? true : false} /></td><td></td><td className={voteStep > 3 ? classes.highlighted : ''}></td><td> &nbsp; </td>
                    <td>{voteStep > 2 ? 'X' : ''}</td><td></td><td>{voteStep > 2 ? 'X' : ''}</td><td></td><td></td></tr>
                <tr><td>Con Man</td><td rowSpan={3}> &nbsp; </td><td rowSpan={3}><img className={voteStep == 5 ? '' : classes.noDisplay} src="..\src\images\QR2.png" width={"60 px"} /></td><td rowSpan={3}> &nbsp; </td><td><input type="checkbox" checked={voteStep > 4 ? true : false} /></td><td></td><td className={voteStep > 3 ? classes.highlighted : ''}>{voteStep > 2 ? 'X' : ''}</td><td> &nbsp; </td>
                    <td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td>Deliquent</td><td><input type="checkbox" /></td><td></td><td className={voteStep > 3 ? classes.highlighted : ''}></td><td> &nbsp; </td>
                    <td>{voteStep > 2 ? 'X' : ''}</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>Mob Boss</td><td><input type="checkbox" /></td><td></td><td className={voteStep > 3 ? classes.highlighted : ''}></td><td> &nbsp; </td>
                    <td></td><td></td><td>{voteStep > 2 ? 'X' : ''}</td><td></td><td></td></tr>
                <tr><td>Moron</td><td></td><td></td><td></td><td><input type="checkbox" checked={voteStep > 4 ? true : false} /></td><td></td><td className={voteStep > 3 ? classes.highlighted : ''}>{voteStep > 2 ? 'X' : ''}</td><td> &nbsp; </td>
                    <td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td>Recently Deceased</td><td></td><td></td><td></td><td><input type="checkbox" /></td><td></td><td className={voteStep > 3 ? classes.highlighted : ''}></td><td> &nbsp; </td>
                    <td>{voteStep > 2 ? 'X' : ''}</td><td></td></tr>
                <tr><td><br /></td></tr>
                <tr><td colSpan={5}>Ballot Question</td></tr>
                <tr><td colSpan={5}><hr /></td></tr>
                <tr><td>Right Answer</td><td rowSpan={3}> &nbsp; </td><td rowSpan={3}><img className={voteStep == 5 ? '' : classes.noDisplay} src="..\src\images\QR3.png" width={"60 px"} /></td><td rowSpan={3}> &nbsp; </td><td><input type="checkbox" checked={voteStep > 1 && voteStep < 5 ? true : false} /></td><td></td><td>{voteStep > 2 ? 'X' : ''}</td><td> &nbsp; </td>
                    <td>{voteStep > 2 ? 'X' : ''}</td><td></td><td className={voteStep > 3 ? classes.highlighted : ''}></td><td></td><td></td></tr>
                <tr><td>Wrong Answer</td><td><input type="checkbox" checked={voteStep > 4 ? true : false} /></td><td></td><td></td><td> &nbsp; </td>
                    <td></td><td></td><td className={voteStep > 3 ? classes.highlighted : ''}>{voteStep > 2 ? 'X' : ''}</td><td></td><td></td></tr>
                <tr />
            </table></td>
            <td style={{ width: '30%' }}>{verbiage[voteStep]}</td>
            <td style={{ width: '20%' }} />
        </tr></table >
    );
}
