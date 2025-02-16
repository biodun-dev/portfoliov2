import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I collaborate with designers using{' '}
                    <Link href="https://www.figma.com">Figma</Link>, especially for UI/UX
                    alignment in product development.
                  </ListItem>
                  <ListItem>
                    I work closely with design teams who use tools like Adobe XD and After
                    Effects for motion and interaction designs.
                  </ListItem>
                  <ListItem>
                    For prototyping and early-stage concepts, Figma's interactive features
                    have been helpful for project visualization.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I primarily use{' '}
                    <Link href="https://code.visualstudio.com/">VSCode</Link> for
                    development, with extensions like Prettier, ESLint, and GitLens to
                    optimize productivity.
                  </ListItem>
                  <ListItem>
                    My backend stack includes{' '}
                    <Link href="https://nodejs.org/">Node.js</Link>,{' '}
                    <Link href="https://nestjs.com/">NestJS</Link>, and{' '}
                    <Link href="https://rubyonrails.org/">Ruby on Rails</Link>.
                  </ListItem>
                  <ListItem>
                    For frontend development, I prefer{' '}
                    <Link href="https://reactjs.org/">React.js</Link> and{' '}
                    <Link href="https://reactnative.dev/">React Native</Link> for mobile
                    apps.
                  </ListItem>
                  <ListItem>
                    I manage real-time operations using{' '}
                    <Link href="https://socket.io/">Socket.IO</Link> and queue-based
                    systems like{' '}
                    <Link href="https://optimalbits.github.io/bull/">BullMQ</Link> for
                    high-concurrency workloads.
                  </ListItem>
                  <ListItem>
                    Testing frameworks like <Link href="https://rspec.info/">RSpec</Link>{' '}
                    and end-to-end tools like Playwright are part of my CI/CD pipeline.
                  </ListItem>
                  <ListItem>
                    I deploy applications on{' '}
                    <Link href="https://aws.amazon.com/">AWS</Link> with{' '}
                    <Link href="https://circleci.com/">CircleCI</Link> for CI/CD
                    automation.
                  </ListItem>
                  <ListItem>
                    Database choices often include{' '}
                    <Link href="https://www.mysql.com/">MySQL</Link> and{' '}
                    <Link href="https://www.postgresql.org/">PostgreSQL</Link>, depending
                    on project needs.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Main Work Machine</TableHeadCell>
                    <TableCell>MacBook Pro (M1) 14″</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating Systems</TableHeadCell>
                    <TableCell>
                      macOS (primary), Linux (for server and development)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>
                      Google Chrome (for development), Safari (personal)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>LG UltraFine 5K</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Keychron K2 (Mechanical)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech MX Master 3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>AirPods Pro / Sony WH-1000XM4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Shure MV7</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Server</TableHeadCell>
                    <TableCell>
                      Linux-powered home server with MTN internet (self-hosted backend)
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
