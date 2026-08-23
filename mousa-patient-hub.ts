// 👑 إمبراطورية منصة موسى العظمى العالمية - نظام تشغيل عيادات الخليج السيادي (Mousa-OS)
// المكون الأسطوري: نظام إدارة علاقات المراجعين، الجدولة التنبؤية، والحصانة الطبية والوقائية الشاملة

export interface ChronicConditions {
  hasDiabetes: boolean;
  hasHypertension: boolean;
  isTakingBloodThinners: boolean; // أدوية سيولة الدم (حساسة جداً للجراحة والخلع)
  allergies: string[];            // الحساسية من الأدوية أو البنج
}

export interface PatientComprehensiveProfile {
  patientId: string;
  gulfNationalId: string;        // الهوية الوطنية الخليجية الموحدة الموثقة
  fullName: string;
  phoneNumber: string;
  birthDate: Date;
  medicalRisks: ChronicConditions;
  loyaltyTier: 'Platinum' | 'Gold' | 'Silver' | 'Standard';
  historicalNoShows: number;     // سجل غيابات المريض السابقة بدون عذر
  lastVisitDate?: Date;
}

export interface AppointmentSlot {
  appointmentId: string;
  patient: PatientComprehensiveProfile;
  dentistId: string;
  specialtyNeeded: 'Orthodontics' | 'Implants' | 'Endodontics' | 'Cosmetic' | 'General';
  scheduledTime: Date;
  status: 'Pending' | 'Confirmed' | 'Attended' | 'NoShow' | 'Cancelled';
  aiNoShowProbability: number;   // نسبة غياب المريض المتوقعة برمجياً (من 0% إلى 100%)
  automationActionRequired: string; // الإجراء الذكي التلقائي المطلوب من الاستقبال
}

export class MousaPatientAndCRMHub {
  private patientRegistry: Map<string, PatientComprehensiveProfile> = new Map();
  private appointmentLedger: AppointmentSlot[] = [];

  /**
   * 👤 1. تسجيل وتوثيق المراجع الخليجي في السحاب وربطه بالملف الطبي الوقائي
   */
  public registerNewPatient(
    gulfId: string,
    name: string,
    phone: string,
    birthStr: string,
    conditions: ChronicConditions
  ): PatientComprehensiveProfile {
    
    const patientId = `MOUSA-PAT-${Math.floor(100000 + Math.random() * 900000)}`;
    
    const newPatient: PatientComprehensiveProfile = {
      patientId,
      gulfNationalId: gulfId,
      fullName: name,
      phoneNumber: phone,
      birthDate: new Date(birthStr),
      medicalRisks: conditions,
      loyaltyTier: 'Standard',
      historicalNoShows: 0
    };

    this.patientRegistry.set(patientId, newPatient);
    console.log(`[☁️ سجل موسى المركزي]: تم توثيق المراجع الموحد بنجاح برقم: ${patientId}`);
    
    // فحص أمني فوري للأمراض الحساسة لتنبيه الطبيب قبل دخول العيادة
    this.auditPatientMedicalSafety(newPatient);
    
    return newPatient;
  }

  /**
   * 🗓️ 2. محرك الجدولة التنبؤي الذكي: يحجز الموعد ويحلل احتمالية غياب المريض تلقائياً
   */
  public createPredictiveAppointment(
    patient: PatientComprehensiveProfile, 
    dentistId: string, 
    specialty: AppointmentSlot['specialtyNeeded'], 
    timeStr: string
  ): AppointmentSlot {
    
    let probability = 10; // النسبة الافتراضية للغياب 10% للمرضى الملتزمين
    let action = "تذكير تلقائي تقليدي قبل الموعد بـ 24 ساعة (SMS/WhatsApp).";

    // خوارزمية ذكية تفحص سجل المريض وسلوكه لحماية وقت العيادة من الضياع
    if (patient.historicalNoShows >= 3) {
      probability = 85;
      action = "🚨 خطورة حرجة! فتح حجز موازٍ (Overbooking) وتفعيل الدفع المسبق لتأكيد الموعد.";
    } else if (patient.historicalNoShows > 0) {
      probability = 45;
      action = "⚠️ خطورة متوسطة! تطلب مكالمة تأكيد بشرية إلزامية من موظف الاستقبال قبل الموعد بـ 12 ساعة.";
    }

    // رفع نسبة المخاطرة إذا كان التخصص معقداً ويستهلك وقتاً طويلاً بالعيادة كالزراعة
    if (specialty === 'Implants' && probability < 50) {
      probability += 15;
    }

    const appointment: AppointmentSlot = {
      appointmentId: `APT-${Math.floor(10000 + Math.random() * 90000)}`,
      patient,
      dentistId,
      specialtyNeeded: specialty,
      scheduledTime: new Date(timeStr),
      status: 'Pending',
      aiNoShowProbability: probability,
      automationActionRequired: action
    };

    this.appointmentLedger.push(appointment);
    return appointment;
  }

  /**
   * 🎯 3. محرك الاستبقاء والتسويق الوقائي الآلي (Proactive CRM Core)
   * استدعاء تلقائي للمرضى الذين مر على آخر زيارة لهم أكثر من 6 أشهر لمنع خسارتهم وضمان التدفق المالي لقسم تنظيف الأسنان والوقاية
   */
  public triggerProactiveRecallCampaigns(): void {
    console.log(`\n==================================================================`);
    console.log(`📢 حملات استبقاء مراجعي الأسنان التلقائية - منصة موسى الذكية 🚀`);
    console.log(`==================================================================`);
    
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    this.patientRegistry.forEach(patient => {
      // محاكاة استدعاء تلقائي للمرضى بناءً على آخر زيارة أو نوع الولاء
      if (!patient.lastVisitDate || patient.lastVisitDate < sixMonthsAgo) {
        console.log(`📍 إرسال عرض الفحص الوقائي الدوري المجاني للمراجع: [${patient.fullName}] - هاتف: ${patient.phoneNumber}`);
        console.log(`✉️ نص الرسالة الذكية: "مرحباً بك في عيادتنا النخبوية، مرت 6 أشهر على آخر فحص لسلامة لثتك، احجز موعدك الوقائي الفوري الآن عبر منصة موسى."`);
        console.log(`------------------------------------------------------------------`);
      }
    });
  }

  /**
   * 🛡️ وحدة التدقيق الطبي والأمان الحيوي للمراجع
   */
  private auditPatientMedicalSafety(patient: PatientComprehensiveProfile): void {
    const risks = patient.medicalRisks;
    if (risks.isTakingBloodThinners || risks.hasDiabetes || risks.allergies.length > 0) {
      console.log(`[🚨 تنبيه أمني عيادي خطير للمريض: ${patient.fullName}]:`);
      if (risks.isTakingBloodThinners) console.log(` - ⚠ تنبيه: المريض يتناول أدوية سيولة دم! يمنع إجراء جراحة أو خلع دون موافقة طبيبه الباطني.`);
      if (risks.hasDiabetes) console.log(` - ⚠ تنبيه: المريض يعاني من السكري! يجب قياس معدل السكر التراكمي قبل معالجة اللثة أو الزراعة.`);
      if (risks.allergies.length > 0) console.log(` - ⚠ تنبيه: يوجد حساسية مسجلة من المواد التالية: [${risks.allergies.join(', ')}].`);
      console.log(`------------------------------------------------------------------`);
    }
  }
      }
        
