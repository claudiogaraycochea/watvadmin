/* Pages */
import Login from '../auth/login/LoginContainer';
import OverView from '../dashboard/overview/OverviewContainer';
import Interactivity from '../dashboard/interactivity/InteractivityContainer';

import MicroPayments from '../dashboard/microPayments/MicroPaymentsContainer';
import MicroPaymentsDetail from '../dashboard/microPayments/detail/DetailContainer';

import MicroAds from '../dashboard/microAds/MicroAdsContainer';
import BigData from '../dashboard/bigData/BigDataContainer';
import Analysis from '../dashboard/analysis/AnalysisContainer';
import Support from '../dashboard/support/SupportContainer';
import Innovation from '../dashboard/innovation/InnovationContainer';
import NotFound from '../public/error/notFound/NotFound';
import StyleGuide from '../ui/styleGuide/StyleGuide';
/* Layouts */
import Dashboard from '../dashboard/DashboardContainer';
import PublicLayout from '../public/publicLayout/PublicLayout';
import FullLayout from '../public/fullLayout/FullLayout';

export const routes = [
	{
		id: 15,
		exact: true,
		path: '/dashboard/styleguide',
		Component: StyleGuide,
		Layout: Dashboard,
		Access: 'Private',
	},/*
	{
		id: 14,
		exact: true,
		path: '/dashboard/messages',
		Component: MessagesContainer,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 13,
		exact: true,
		path: '/dashboard/project/:project_id/task/detail/:task_id',
		Component: TaskDetail,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 12,
		exact: false,
		path: '/dashboard/budget/:project_id',
		Component: BudgetingTool,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 11,
		exact: false,
		path: '/dashboard/schedule/:project_id',
		Component: Schedule,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 10,
		exact: false,
		path: '/dashboard/ganttChart/:project_id',
		Component: GanttChart,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 9,
		exact: true,
		path: '/dashboard/project/edit/:project_id',
		Component: ProjectEdit,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 8,
		exact: true,
		path: '/dashboard/project/add',
		Component: ProjectAdd,
		Layout: Dashboard,
		Access: 'Private',
	},*/
	{
		id: 7,
		exact: true,
		path: '/dashboard/micropayments/detail/:project_id',
		Component: MicroPaymentsDetail,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 12,
		exact: true,
		path: '/dashboard/innovation',
		Component: Innovation,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 11,
		exact: true,
		path: '/dashboard/support',
		Component: Support,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 10,
		exact: true,
		path: '/dashboard/analysis',
		Component: Analysis,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 9,
		exact: true,
		path: '/dashboard/bigdata',
		Component: BigData,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 8,
		exact: true,
		path: '/dashboard/microads',
		Component: MicroAds,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 7,
		exact: true,
		path: '/dashboard/micropayments',
		Component: MicroPayments,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 6,
		exact: true,
		path: '/dashboard/interactivity',
		Component: Interactivity,
		Layout: Dashboard,
		Access: 'Private',
	},
	{
		id: 5,
		exact: true,
		path: '/dashboard',
		Component: OverView,
		Layout: Dashboard,
		Access: 'Private',
	},/*
	{
		id: 5,
		exact: true,
		path: '/job',
		Component: Job,
		Layout: PublicLayout,
		Access: 'Public',
	},
	{
		id: 4,
		exact: true,
		path: '/contactUs',
		Component: ContactUs,
		Layout: PublicLayout,
		Access: 'Public',
	},
	{
		id: 3,
		exact: true,
		path: '/aboutUs',
		Component: AboutUs,
		Layout: PublicLayout,
		Access: 'Public',
	},*/
	{
		id: 2,
		exact: true,
		path: '/',
		Component: Login,
		Layout: FullLayout,
		Access: 'Public',
	},
	{
		id: 1,
		exact: true,
		path: '*',
		Component: NotFound,
		Layout: PublicLayout,
		Access: 'Public',
	},
];
