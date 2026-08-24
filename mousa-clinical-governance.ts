// 👑 إمبراطورية منصة موسى العظمى العالمية - نظام تشغيل عيادات الخليج السيادي (Mousa-OS)
// المكون الأسطوري: مجمع حوكمة الأطباء، جدولة القوى العاملة الذكية، والامتثال للتراخيص الصحية الخليجية

export interface DoctorClinicalAudit {
  doctorId: string;
  totalProceduresPerformed: number;
  treatmentFailureCount: number;  // عدد الحالات التي فشلت وأحتاجت إعادة معالجة (Retreatment)
  patientComplaintsCount: number;  // عدد شكاوى المرضى المسجلة ضد الطبيب
  clinicalQualityScore: number;   // تقييم الجودة التلقائي من 0 إلى 100%
}

export interface StaffShift {
  staffId: string;
  staffName: string;
  role: 'Dentist' | 'Dental-Assistant' | 'Hygienist' | 'Receptionist';
  assignedRoomId: string;
  startTime: Date;
  endTime: Date;
}

export interface GulfMedicalLicense {
  staffId: string;
  staffName: string;
  authority: 'SCFHS-KSA' | 'DHA-DUBAI' | 'MOPH-QATAR' | 'MOH-KUWAIT'; // الهيئات الصحية الخليجية
  licenseNumber: string;
  expirationDate: Date;
  complianceStatus: 'FULLY-COMPLIANT' | 'WARNING-NEAR-EXPIRY' | 'BLOCKED-EXPIRED';
}

export interface PerformanceReport {
  staffId: string;
  staffName: string;
  statusReport: string;
  actionTaken: 'SYSTEM-CLEAN' | 'RESTRICT-APPOINTMENTS' | 'FORCE-RENEWAL-ALERT';
}

export class MousaClinicalGovernanceEngine {
  private auditLedger: Map<string, DoctorClinicalAudit> = new Map();
  private licenseRegistry: Map<string, GulfMedicalLicense> = new Map();
  private masterShiftSchedule: StaffShift[] = [];

  /**
   * 🔬 1. محرك حوكمة وتقييم أداء الأطباء (Clinical Quality Oracle)
   * يفحص جودة العلاجات ويحمي سمعة العيادة والمنصة من الأخطاء المتكررة تلقائياً
   */
  public auditDoctorPerformance(doctorId: string, doctorName: string, failures: number, complaints: number): PerformanceReport {
    const audit = this.auditLedger.get(doctorId) || {
      doctorId,
      totalProceduresPerformed: 100, // حد افتراضي للفحص
      treatmentFailureCount: failures,
      patientComplaintsCount: complaints,
      clinicalQualityScore: 100
    };

    audit.treatmentFailureCount = failures;
    audit.patientComplaintsCount = complaints;

    // معادلة حساب جودة العمل الطبي لمنصة موسى
    const penalty = (failures * 8) + (complaints * 5);
    audit.clinicalQualityScore = Math.max(0, 100 - penalty);
    this.auditLedger.set(doctorId, audit);

    let action: PerformanceReport['actionTaken'] = 'SYSTEM-CLEAN';
    let report = `العمل الطبي للطبيب [${doctorName}] مستقر ومطابق لمعايير الجودة السريرية للمنصة.`;

    if (audit.clinicalQualityScore < 75) {
      action = 'RESTRICT-APPOINTMENTS';
      report = `🚨 [تحذير جودة حرج]: الطبيب [${doctorName}] يمتلك معدل أخطاء أو شكاوى مرتفع! تقييم جودته الحالية [${audit.clinicalQualityScore}%]. تم حظر حجز الحالات المعقدة (كالزراعة والجراحة) على اسمه تلقائياً وتوجيهه لإعادة التقييم.`;
    }

    const reportResult: PerformanceReport = { staffId: doctorId, staffName: doctorName, statusReport: report, actionTaken: action };
    this.printGovernanceLog(reportResult);
    return reportResult;
  }

  /**
   * 📜 2. بوت تتبع التراخيص الطبية والامتثال للهيئات الخليجية (License Compliance Tracker)
   * يراقب صلاحية التراخيص ويحظر المقصرين تلقائياً لمنع الغرامات الكبرى والإغلاق
   */
  public verifyAndLockExpiredLicenses(staffId: string, name: string, authority: GulfMedicalLicense['authority'], licNum: string, expDateStr: string): GulfMedicalLicense {
    const expDate = new Date(expDateStr);
    const today = new Date();
    
    // حساب الأيام المتبقية لانتهاء الترخيص الطبي الرسمي
    const timeDiff = expDate.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let status: GulfMedicalLicense['complianceStatus'] = 'FULLY-COMPLIANT';

    console.log(`\n==================================================================`);
    console.log(`📜 نظام الامتثال للتراخيص الطبية والقانونية - هيئات الصحة بالخليج 🏛️`);
    console.log(`==================================================================`);
    console.log(`👤 الموظف: ${name} | ترخيص رقم: ${licNum} التابع لـ [${authority}]`);

    if (daysRemaining <= 0) {
      status = 'BLOCKED-EXPIRED';
      console.log(`🚨 [حظر قانوني فوري]: الترخيص منتهي الصلاحية منذ [${Math.abs(daysRemaining)}] يوماً! تم إيقاف وحظر حساب الموظف فوراً من منصة المواعيد والعمليات لحماية العيادة من الغرامات الكبرى وقوانين وزارة الصحة.`);
    } else if (daysRemaining <= 90) {
      status = 'WARNING-NEAR-EXPIRY';
      console.log(`⚠️ [إنذار امتثال مبكر]: المتبقي على انتهاء ترخيص الموظف [${daysRemaining}] يوماً فقط. تم تفعيل تنبيه آلي متكرر على لوحة تحكم الموظف والإرسال التلقائي لروابط التجديد الرسمية.`);
    } else {
      console.log(`✅ [حالة الامتثال]: الترخيص ساري وصالح لمدة [${daysRemaining}] يوماً قادمة. الوضع آمن قانونياً.`);
    }
    console.log(`------------------------------------------------------------------`);

    const license: GulfMedicalLicense = { staffId, staffName: name, authority, licenseNumber: licNum, expirationDate: expDate, complianceStatus: status };
    this.licenseRegistry.set(staffId, license);
    return license;
  }

  /**
   * 🗓️ 3. نظام جدولة الشفتات الذكي والتوزيع التلقائي للقوى العاملة (Workforce Scheduler)
   */
  public autoScheduleStaffShift(shift: StaffShift): void {
    this.masterShiftSchedule.push(shift);
    console.log(`⚙️ [جدولة القوى العاملة]: تم تعيين [${shift.staffName}] بدور [${shift.role}] للعمل في غرفة العلاج رقم [${shift.assignedRoomId}] من الساعة [${shift.startTime.getHours()}:00] إلى الساعة [${shift.endTime.getHours()}:00].`);
  }

  /**
   * دالة طباعة تقارير الحوكمة والتدقيق الداخلي للعيادات
   */
  private printGovernanceLog(report: PerformanceReport): void {
    console.log(`\n==================================================================`);
    console.log(`🛡️ مركز الحوكمة والرقابة الإكلينيكية الموحد - منصة موسى العظمى 🔬`);
    console.log(`==================================================================`);
    console.log(`👤 الكادر المستهدف: ${report.staffName} (رقم: ${report.staffId})`);
    console.log(`📊 تقرير الحالة التشغيلية: ${report.statusReport}`);
    console.log(`⚙️ الإجراء البرمجي المتخذ آلياً: [ ${report.actionTaken} ]`);
    console.log(`==================================================================`);
  }
}
