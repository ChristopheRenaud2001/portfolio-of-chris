import Project from "../../components/Project/Project";
import "./projects.css";
import {
	DottedBarChart,
	HorizontalBarChart,
	LevelChart,
	LineChart,
	RadarChart,
	SectionChart,
} from "../../assets/Images/Projects/EPSI/Core";
import {
	EPSIAdminLoginDesktopLight,
	EPSIAdminLoginDesktopDark,
	EPSIAdminLoginMobileLight,
	EPSIAdminLoginMobileDark,
} from "../../assets/Images/Projects/EPSI/Platforms/Admin";
import {
	EPSIClientLoginDesktopLight,
	EPSIClientLoginDesktopDark,
	EPSIClientLoginMobileLight,
	EPSIClientLoginMobileDark,
	EPSIClientInterviewQuestionsSearch,
	EPSIClientMassRegistrationList,
	EPSIClientMassRegistrationUpload,
	EPSIClientRegistrationDetails,
} from "../../assets/Images/Projects/EPSI/Platforms/Client";
import {
	EPSICandidateLoginDesktopLight,
	EPSICandidateLoginDesktopDark,
	EPSICandidateLoginMobileLight,
	EPSICandidateLoginMobileDark,
} from "../../assets/Images/Projects/EPSI/Platforms/Candidate";

function Projects() {
	return (
		<div className="h-screen content-center" id="projects">
			<h2 className="text-4xl font-bold">Projects</h2>
			<Project
				link="https://irap-qaadmin.epsi-inc.com/"
				title="EPSI - Admin Platform"
				images={[
					EPSIAdminLoginDesktopLight,
					EPSIAdminLoginMobileLight,
					EPSIAdminLoginDesktopDark,
					EPSIAdminLoginMobileDark,
				]}
			/>
			<Project
				link="https://irap-qaclient.epsi-inc.com/"
				title="EPSI - Client Platform"
				images={[
					EPSIClientLoginDesktopLight,
					EPSIClientLoginMobileLight,
					EPSIClientLoginDesktopDark,
					EPSIClientLoginMobileDark,
					EPSIClientInterviewQuestionsSearch,
					EPSIClientMassRegistrationList,
					EPSIClientMassRegistrationUpload,
					EPSIClientRegistrationDetails,
				]}
			/>
			<Project
				link="https://irap-qacandidat.epsi-inc.com/"
				title="EPSI - Candidate Platform"
				images={[
					EPSICandidateLoginDesktopLight,
					EPSICandidateLoginMobileLight,
					EPSICandidateLoginDesktopDark,
					EPSICandidateLoginMobileDark,
				]}
			/>
			<Project
				title="EPSI - Core Package"
				images={[
					DottedBarChart,
					HorizontalBarChart,
					LevelChart,
					LineChart,
					RadarChart,
					SectionChart,
				]}
			/>
		</div>
	);
}

export default Projects;
