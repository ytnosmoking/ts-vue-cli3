import { getView, getCommon } from "utils/tools";
const BaseView = getCommon("CommonRouteView");

export const dcdRoutes = {
  path: "total",
  name: "total",
  meta: {
    icon: "el-icon-place",
    title: "达成度统计"
  },
  redirect: "/total/require",
  component: BaseView,
  children: [
    {
      path: "/total/require",
      name: "totalRequire",
      meta: {
        icon: "el-icon-location",
        title: "毕业要求"
      },
      component: getView("Total")
    },
    {
      path: "/total/student",
      name: "totalStudent",
      meta: {
        icon: "el-icon-location-outline",
        title: "学生毕业要求"
      },
      component: getView("Total/Student")
    }
  ]
};

export const courseRoutes = {
  path: "course",
  name: "course",
  meta: {
    icon: "el-icon-alarm-clock",
    title: "课程达成度"
  },
  redirect: "/course/manage",
  component: BaseView,
  children: [
    {
      path: "/course/manage",
      name: "courseManage",
      meta: {
        icon: "el-icon-location",
        title: "管理"
      },
      component: getView("Course")
    },
    {
      path: "/course/target",
      name: "courseTarget",
      meta: {
        icon: "el-icon-timer",
        title: "目标"
      },
      component: getView("Course/Target")
    }
  ]
};
export const targetSetRoutes = {
  path: "targetSet",
  name: "targetSet",
  meta: {
    icon: "el-icon-watch-1",
    title: "毕业目标设置"
  },
  redirect: "/targetSet/require",
  component: BaseView,
  children: [
    {
      path: "/targetSet/require",
      name: "targetSetRequire",
      meta: {
        icon: "el-icon-watch",
        title: "毕业要求"
      },
      component: getView("Target")
    },
    {
      path: "/targetSet/line",
      name: "targetSetLine",
      meta: {
        icon: "el-icon-lock",
        title: "达标线"
      },
      component: getView("Target/Line")
    }
  ]
};

export default [dcdRoutes, courseRoutes, targetSetRoutes];

// import BaseView from "common/BaseView";

// const roleOne = ["department_master", "major_master"]; // 院长 主任
// const roleTwo = [
//   "teacher",
//   "group_master",
//   "professor",
//   "department_master",
//   "major_master"
// ]; // 组长 教师 教授
// const roleThree = ["department_master", "major_master", "professor"]; // 院长 主任
// // const roleThree = ['dean', 'director', 'professor'] // 组长 教师
// // role: roleOne
// // 达成度统计
// const TotalRoutes = {
//   path: "/total",
//   name: "total",
//   meta: {
//     title: "达成度统计",
//     role: roleOne
//   },
//   component: BaseView,
//   redirect: "/total/require",
//   children: [
//     {
//       path: "/total/require",
//       name: "totalRequire",
//       meta: {
//         title: "达成度统计-毕业要求",
//         role: roleOne
//       },
//       component: getView("Total/Require")
//     },
//     {
//       path: "/total/graduate",
//       name: "totalGraduate",
//       meta: {
//         title: "学生毕业要求达成度",
//         role: roleOne
//       },
//       component: getView("Total/Graduate"),
//       children: [
//         {
//           path: ":id",
//           name: "graduateInfo",
//           meta: {
//             title: "学生达成度详情",
//             role: roleOne
//           },
//           component: getView("Total/GraduateInfo")
//         }
//       ]
//     },
//     // 暂时不显示
//     // {
//     //   path: '/total/courseTarget',
//     //   name: 'courseTarget',
//     //   meta: {
//     //     title: '课程目标达成度',
//     //     role: roleOne
//     //   },
//     //   component: getView('Total/CourseTarget')
//     // },
//     {
//       path: "/total/support",
//       name: "totalSupport",
//       meta: {
//         title: "达成度统计-支撑点",
//         role: roleOne
//       },
//       component: getView("Total/Support")
//     },
//     {
//       path: "/total/class",
//       name: "totalClasses",
//       meta: {
//         title: "达成度统计-课程组",
//         role: roleOne
//       },
//       component: getView("Total/Classes")
//     }
//   ]
// };
// // role: ['teacher', 'leader']
// // 课程达成度
// const CourseRoutes = {
//   path: "/course",

//   name: "course",
//   meta: {
//     title: "课程达成度",
//     role: roleTwo
//   },
//   component: BaseView,
//   redirect: "/course/set",
//   children: [
//     {
//       path: "/course/set",
//       name: "courseSet",
//       meta: {
//         title: "课程管理",
//         role: roleTwo
//       },
//       component: getView("Course/Set"),
//       children: [
//         {
//           path: ":id/outLine",
//           name: "courseOutLine",
//           meta: {
//             title: "课程大纲",
//             role: roleTwo
//           },
//           component: getView("Course/OutLine")
//         },
//         {
//           path: ":id/education",
//           name: "courseSetEdu",
//           meta: {
//             title: "教学环节设置",
//             role: roleTwo
//           },
//           component: getView("Course/SetEdu")
//         },
//         {
//           path: ":id/score",
//           name: "courseSetScore",
//           meta: {
//             title: "成绩上传",
//             role: roleTwo
//           },
//           component: getView("Course/SetScore")
//         }
//       ]
//     },
//     {
//       path: "/course/target",
//       name: "courseTarget",
//       meta: {
//         title: "课程目标达成度",
//         role: roleTwo
//       },
//       component: getView("Total/Target"),
//       children: [
//         {
//           path: ":id",
//           name: "courseTargetInfo",
//           meta: {
//             title: "课程达成度详情",
//             role: roleTwo
//           },
//           // component: getView('Course/TargetInfo')
//           component: getView("Total/TargetInfo")
//         }
//       ]
//     }
//   ]
// };
// // role: ['dean', 'professor','director']
// // 毕业目标 设置
// const FinishRoutes = {
//   path: "/finish",
//   name: "finish",
//   meta: {
//     title: "毕业目标设置",
//     role: roleThree
//   },
//   component: BaseView,
//   redirect: "/finish/requireMent",
//   children: [
//     // 毕业要求
//     {
//       path: "/finish/requireMent",
//       name: "finishRequireMent",
//       meta: {
//         title: "毕业要求"
//       },
//       component: getView("Finish/RequireMent")
//     },
//     // 毕业目标达标线
//     {
//       path: "/finish/markingLine",
//       name: "finishMarkingLine",
//       meta: {
//         title: "毕业目标达标线",
//         role: roleThree
//       },
//       component: getView("Finish/MarkingLine")
//     },
//     // 专业培养方案
//     {
//       path: "/finish/project",
//       name: "finishProject",
//       meta: {
//         title: "专业培养方案",
//         role: roleThree
//       },
//       component: getView("Finish/Project"),
//       children: [
//         {
//           path: ":id",
//           name: "finishProjectInfo",
//           meta: {
//             title: "专业培养方案详情",
//             role: roleThree
//           },
//           component: getView("Finish/ProjectInfo")
//         }
//       ]
//     },
//     // 专业支撑点
//     {
//       path: "/finish/support",
//       name: "finishSupport",
//       meta: {
//         title: "专业支撑点",
//         role: roleThree
//       },
//       component: getView("Finish/Support"),
//       children: [
//         {
//           path: ":id",
//           name: "finishSupportInfo",
//           meta: {
//             title: "支撑课程",
//             role: roleThree
//           },
//           component: getView("Finish/SupportInfo")
//           // children: [
//           //   {
//           //     path: ':id/editor',
//           //     name: 'finishSupportInfoEditor',
//           //     meta: {
//           //       title: '编辑支撑课程',
//           //       role: roleThree
//           //     },
//           //     component: getView('Finish/SupportInfoEditor')
//           //   }
//           // ]
//         }
//       ]
//     },
//     // 课程大纲
//     {
//       path: "/finish/outLine",
//       name: "finishOutLine",
//       meta: {
//         title: "课程大纲",
//         role: roleThree
//       },
//       component: getView("Finish/OutLine"),
//       children: [
//         {
//           path: ":id",
//           name: "finishOutLineCheck",
//           meta: {
//             title: "查看课程大纲",
//             role: roleThree
//           },
//           component: getView("Finish/OutLineCheck")
//         },
//         {
//           path: ':id/editor',
//           name: 'finishOutLineEditor',
//           meta: {
//             title: '编辑支撑课程',
//             role: roleThree
//           },
//           component: getView('Finish/OutLineEditor')
//         }
//       ]
//     },
//     // 报表
//     {
//       path: '/finish/report',
//       name: 'finishReport',
//       meta: {
//         title: '实现矩阵详表',
//         role: roleThree
//       },
//       component: getView('Finish/Report'),
//       children: [
//         {
//           path: ':id',
//           name: 'finishReportInfo',
//           meta: {
//             title: '实现矩阵详表详情',
//             role: roleThree
//           },
//           component: getView('Finish/ReportInfo')
//           // component: getView('Total/GraduateInfo')
//         }
//       ]
//     },
//     // 课程分配
//     {
//       path: '/finish/course',
//       name: 'finishCourse',
//       meta: {
//         title: '课程分配',
//         role: roleThree
//       },
//       component: getView('Finish/Course')
//     },
//     // 课程组管理
//     {
//       path: '/finish/courseSet',
//       name: 'finishCourseSet',
//       meta: {
//         title: '课程组管理',
//         role: roleThree
//       },
//       component: getView('Finish/CourseSet'),
//       children: [
//         {
//           path: 'new',
//           name: 'finishAddCourse',
//           meta: {
//             title: '新增课程组管理',
//             role: roleThree
//           },
//           component: getView('Finish/CourseAdd')
//         },
//         {
//           path: ':id',
//           name: 'finishEditCourse',
//           meta: {
//             title: '编辑课程组管理',
//             role: roleThree
//           },
//           component: getView('Finish/CourseAdd')
//         }
//       ]
//     }
//   ]
// };
// // role: ['dean', 'professor', 'director']
// // 字典管理
// const DictionaryRoutes = {
//   path: '/dictionary',
//   name: 'dictionary',
//   meta: {
//     title: '字典管理',
//     role: roleThree
//   },
//   component: BaseView,
//   redirect: '/dictionary/college',
//   children: [
//     {
//       path: '/dictionary/college',
//       name: 'dictionaryCollege',
//       meta: {
//         title: '学院',
//         role: roleThree
//       },
//       component: getView('Dictionary/College')
//     },
//     {
//       path: '/dictionary/major',
//       name: 'dictionaryMajor',
//       meta: {
//         title: '专业',
//         role: roleThree
//       },
//       component: getView('Dictionary/College')
//     },
//     {
//       path: '/dictionary/classes',
//       name: 'dictionaryClasses',
//       meta: {
//         title: '专业班级',
//         role: roleThree
//       },
//       component: getView('Dictionary/College')
//     },
//     {
//       path: '/dictionary/term',
//       name: 'dictionaryTerm',
//       meta: {
//         title: '学期',
//         role: roleThree
//       },
//       component: getView('Dictionary/College')
//     },
//     // {
//     //   path: '/dictionary/grade',
//     //   name: 'dictionaryGrade',
//     //   meta: {
//     //     title: '年级',
//     //     role: roleThree
//     //   },
//     //   component: getView('Dictionary/College')
//     // },
//     {
//       path: '/dictionary/courseType',
//       name: 'dictionaryCourseType',
//       meta: {
//         title: '课程类别',
//         role: roleThree
//       },
//       component: getView('Dictionary/College')
//     }
//   ]
// };
// // role: ['dean', 'professor', 'director']
// // 基本信息管理
// const BaseInfoRoutes = {
//   path: '/info',
//   name: 'info',
//   meta: {
//     title: '基本信息管理',
//     role: roleThree
//   },
//   component: BaseView,
//   redirect: '/info/course',
//   children: [
//     {
//       path: '/info/course',
//       name: 'infoCourse',
//       meta: {
//         title: '课程管理',
//         role: roleThree
//       },
//       component: getView('Info/Course')
//     },
//     {
//       path: '/info/teacher',
//       name: 'infoTeacher',
//       meta: {
//         title: '教师管理',
//         role: roleThree
//       },
//       component: getView('Info/Course')
//     },
//     {
//       path: '/info/student',
//       name: 'infoStudent',
//       meta: {
//         title: '学生管理',
//         role: roleThree
//       },
//       component: getView('Info/Course'),
//       children: [
//         {
//           path: '/info/student/checkAll',
//           name: 'infoAllStudent',
//           meta: {
//             title: '学生管理',
//             role: roleThree
//           },
//           component: getView('Info/Student')
//         }
//       ]
//     }
//   ]
// };
// // 账号管理
// // eslint-disable-next-line
// const AccountRoutes = {
//   path: '/account',
//   name: 'account',
//   meta: {
//     title: '账号管理',
//     role: roleThree
//   },
//   component: BaseView,
//   redirect: '/account/set',
//   children: [
//     {
//       path: '/account/set',
//       name: 'accountSet',
//       meta: {
//         title: '账号管理',
//         role: roleThree
//       },
//       component: getView('Account/Set')
//     },
//     {
//       path: '/account/role',
//       name: 'accountRole',
//       meta: {
//         title: '角色管理',
//         role: roleThree
//       },
//       component: getView('Account/Set')
//     }
//   ]
// };

// const RecordRoutes = {
//   path: '/record',
//   name: 'record',
//   meta: {
//     title: '上传记录',
//     role: roleTwo
//   },
//   component: BaseView,
//   redirect: '/record/total',
//   children: [
//     {
//       path: '/record/total',
//       name: 'recordTotal',
//       meta: {
//         title: '上传记录',
//         role: roleTwo
//       },
//       component: getView('Record/Total')
//     }
//   ]
// };
// const UserInfo = {
//   path: '/user',

//   name: 'user',
//   meta: {
//     title: '用户信息',
//     role: roleTwo
//   },
//   component: BaseView,
//   redirect: '/user/info',
//   children: [
//     {
//       path: '/user/info',
//       name: 'userInfo',
//       meta: {
//         title: '基本信息',
//         role: roleTwo
//       },
//       component: getView('User/Info')
//     }
//   ]
// };

// export const otherRoutes = [
//   TotalRoutes,
//   CourseRoutes,
//   FinishRoutes,
//   DictionaryRoutes,
//   BaseInfoRoutes,
//   RecordRoutes,
//   UserInfo
// ];
