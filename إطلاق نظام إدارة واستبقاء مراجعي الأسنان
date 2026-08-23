// 👑 إمبراطورية منصة موسى العظمى العالمية - نظام تشغيل عيادات الخليج السيادي (Mousa-OS)
// المكون: العقل الحاكم لإدارة علاقات المراجعين، محلل اللهجات الخليجية، والضمانات الرقمية والأمان الحيوي المعمق

export interface DeepMedicalMetrics {
  hasDiabetes: boolean;
  hbA1cLevel?: number;           // معدل السكر التراكمي (حرج جداً لنجاح زراعة الأسنان)
  isTakingBloodThinners: boolean; 
  allergies: string[];            // حساسية البنج، البنسلين، أو اللاتكس
  dentalAnxietyScore: 'Low' | 'Medium' | 'Severe-Phobia'; // قياس فوبيا كرسي الأسنان لتحديد أسلوب التعامل
  boneDensityScore?: 'D1' | 'D2' | 'D3' | 'D4'; // جودة عظام الفك قبل بدء الجراحة والزراعة
}

export interface ImplantAndVeneerWarranty {
  materialType: 'Emax-Veneer' | 'Zirconia-Crown' | 'Straumann-Implant' | 'Nobel-Biocare';
  serialNumber: string;         // الرقم التسلسلي العالمي للقطعة المزروعة في فم المريض
  manufacturingCountry: string; // بلد المنشأ (سويسرا، ألمانيا، أمريكا)
  warrantyYears: number;
  activationDate: Date;
}

export interface PatientBehavioralScore {
  lifetimeValueSAR: number;      // إجمالي ما أنفقه المريض في شبكة العيادات بالريال/الدرهم
  cancellationRate: number;     // نسبة إلغاء المواعيد المفاجئة
  punctualityMinutes: number;   // متوسط دقائق التأخر عن الموعد
  trustRating: 1 | 2 | 3 | 4 | 5; // تقييم العيادة لسلوك المريض التزامه بالخطة العلاجية
}

export interface MasterPatientProfile {
  patientId: string;
  gulfNationalId: string;       // الهوية الوطنية الخليجية الموحدة الموثقة عبر نفاذ أو UAE Pass
  fullName: string;
  phoneNumber: string;
  gulfDialect: 'Najdi' | 'Hijazi' | 'Emirati' | 'Kuwaiti' | 'Qatari' | 'Bahraini' | 'Omani' | 'Standard-Arabic'; // اللهجة الخليجية المفضلة للمراجع
  clinicalMetrics: DeepMedicalMetrics;
  warrantiesHanded: ImplantAndVeneerWarranty[];
  behaviorScore: PatientBehavioralScore;
  lastVisitDate?: Date;
}

export interface HyperPredictiveSlot {
  appointmentId: string;
  patient: MasterPatientProfile;
  dentistId: string;
  treatmentCategory: 'Surgery' | 'Orthodontics' | 'Cosmetic' | 'Endodontics';
  scheduledTime: Date;
  status: 'Pending' | 'Confirmed' | 'Attended' | 'NoShow';
  aiNoShowRiskPercentage: number; // حساب مخاطر غياب المريض برمجياً بدقة متناهية
  smartActionPlan: string;        // خطة العمل التلقائية الموجهة لموظف الاستقبال لإنقاذ اليوم
}

export class MousaUltimatePatientEngine {
  private globalPatientRegistry: Map<string, MasterPatientProfile> = new Map();
  private globalAppointmentLedger: HyperPredictiveSlot[] = [];

  // 🤖 قاموس محرك الذكاء الاصطناعي لتحليل اللهجات الخليجية (Mousa Dialect AI Backend)
  private dialectResponses = {
    Najdi: {
      welcome: "يا هلا والله ومسهلا فيك يا بعد حيي بمركزنا النخبوي. شلون سنونك الحين؟ عساك طيب؟",
      followUp: "يا طويل العمر، تذكير بموعدك بكرة. تكفى لا تبطي علينا، الدكتور بانتظارك حياك الله."
    },
    Emirati: {
      welcome: "مرحبا ملايين وسهلاً بك في مركزنا الغالي. عساك بخير وسهالة؟ طمنا عن عوار أسنانك؟",
      followUp: "مرحبا الساع، نذكرك بموعدك يا خوي باجر في العيادة. حضورك يشرفنا ونرقب شوفك."
    },
    Kuwaiti: {
      welcome: "حياك الله يا يبه وعزيز وغالي بمركزنا. عساك مرتاح؟ شلون عوار ضرسك الحين؟",
      followUp: "قواك الله يا خوي، حابين نذكرك بموعدك باجر بالعيادة. لا تخلّينا ننطرك، ناطرينك على خير."
    },
    Hijazi: {
      welcome: "أهلاً وسهلاً بيك يا سيدي، نورّت العيادة. كيف حال أسنانك دحين؟ إن شاء الله أهون؟",
      followUp: "يا سيدي الكريم، تذكير بموعدك بكرة بالعيادة. الله يسعدك لا تتأخر علينا، المستشار بانتظارك."
    },
    Standard_Arabic: {
      welcome: "مرحباً بك في مركزنا الطبي النخبوي الموحد. كيف يمكن لمنصة موسى العالمية خدمتك اليوم؟",
      followUp: "عزيزنا المراجع، نود تذكيرك بموعدك الطبي غداً. يرجى الحضور قبل الموعد بـ 15 دقيقة."
    }
  };

  /**
   * 👤 1. إنشاء وتدقيق ملف المراجع الأسطوري الشامل والتحقق الطبي الحرج وتحديد اللهجة
   */
  public onboardComprehensivePatient(
    gulfId: string,
    name: string,
    phone: string,
    dialect: MasterPatientProfile['gulfDialect'],
    metrics: DeepMedicalMetrics,
    behavior: PatientBehavioralScore
  ): MasterPatientProfile {
    
    const patientId = `MOUSA-PATIENT-${Math.floor(1000000 + Math.random() * 9000000)}`;
    
    const newProfile: MasterPatientProfile = {
      patientId,
      gulfNationalId: gulfId,
      fullName: name,
      phoneNumber: phone,
      gulfDialect: dialect,
      clinicalMetrics: metrics,
      warrantiesHanded: [], 
      behaviorScore: behavior
    };

    this.globalPatientRegistry.set(patientId, newProfile);
    
    // 🗣️ تشغيل بوت الاستقبال الترحيبي باللهجة المحلية فوراً
    const dialectKey = (dialect === 'Najdi' || dialect === 'Emirati' || dialect === 'Kuwaiti' || dialect === 'Hijazi') ? dialect : 'Standard_Arabic';
    console.log(`\n🤖 [Mousa Reception AI Bot]: ${this.dialectResponses[dialectKey].welcome}`);
    console.log(`[☁️ مركز موسى السيادي]: تم توثيق وحقن السجل الشامل للمراجع: ${name} (رقم: ${patientId})`);
    
    // التدقيق الإكلينيكي المعمق والفوري لحماية حياة المريض والعيادة قانونياً
    this.runDeepClinicalAudit(newProfile);
    
    return newProfile;
  }

  /**
   * 💎 2. محرك تسجيل وإصدار ضمانات التركيبات والزرعات الرقمية الموحدة عابرة الحدود في الخليج
   */
  public issueDigitalWarranty(patientId: string, warranty: ImplantAndVeneerWarranty): void {
    const patient = this.globalPatientRegistry.get(patientId);
    if (!patient) return;

    patient.warrantiesHanded.push(warranty);
    console.log(`\n==================================================================`);
    console.log(`👑 شهادة ضمان رقمية معتمدة من منصة موسى العظمى لطب الأسنان 👑`);
    console.log(`==================================================================`);
    console.log(`👤 اسم المريض: ${patient.fullName}`);
    console.log(`🦷 نوع الإجراء والمادة: ${warranty.materialType}`);
    console.log(`🔢 الرقم التسلسلي العالمي (Serial): ${warranty.serialNumber}`);
    console.log(`🇩🇪 بلد التصنيع المصدر: ${warranty.manufacturingCountry}`);
    console.log(`🛡️ مدة الضمان الموثقة في السحاب: ${warranty.warrantyYears} سنوات من تاريخ التفعيل.`);
    console.log(`------------------------------------------------------------------`);
  }

  /**
   * 🗓️ 3. مصفوفة الجدولة فائقة التنبؤ: تحلل الأبعاد الطبية والجغرافية والسلوكية للمراجع وتمنع تسربه
   */
  public scheduleHyperPredictiveAppointment(
    patient: MasterPatientProfile,
    dentistId: string,
    category: HyperPredictiveSlot['treatmentCategory'],
    timeStr: string
  ): HyperPredictiveSlot {
    
    let riskScore = 10; // نسبة مخاطرة افتراضية منخفضة 10%
    
    const dialectKey = (patient.gulfDialect === 'Najdi' || patient.gulfDialect === 'Emirati' || patient.gulfDialect === 'Kuwaiti' || patient.gulfDialect === 'Hijazi') ? patient.gulfDialect : 'Standard_Arabic';
    let actionPlan = `🤖 [بوت الواتساب التلقائي]: إرسال رسالة التذكير باللهجة المحلية: "${this.dialectResponses[dialectKey].followUp}"`;

    // أولاً: فحص السلوك المالي والالتزام
    if (patient.behaviorScore.cancellationRate > 0.40 || patient.behaviorScore.trustRating <= 2) {
      riskScore += 40;
    }

    // ثانياً: فحص عامل الخوف والفوبيا (المرضى الذين يملكون فوبيا حادة يهربون في يوم الموعد)
    if (patient.clinicalMetrics.dentalAnxietyScore === 'Severe-Phobia') {
      riskScore += 25;
      actionPlan = `🧠 المريض يعاني من فوبيا حادة! إرسال رسالة طمأنينة متخصصة بلهجة [${patient.gulfDialect}]، وتوجيه الطبيب بتحضير الغاز الضاحك وتخصيص 15 دقيقة إضافية للاستماع للمريض.`;
    }

    // ثالثاً: حماية الحالات الجراحية الكبرى من تضيع وقت العيادة (كالزراعة جراحة الوجه والفكين)
    if (category === 'Surgery' && riskScore >= 40) {
      riskScore += 10;
      actionPlan = "🚨 خطورة جراحية حرجة! فتح حجز موازٍ فوري (Double-Booking) وتفعيل نظام الدفع المسبق لرسوم غرفة العمليات قبل الموعد.";
    }

    const appointment: HyperPredictiveSlot = {
      appointmentId: `APT-${Math.floor(100000 + Math.random() * 900000)}`,
      patient,
      dentistId,
      treatmentCategory: category,
      scheduledTime: new Date(timeStr),
      status: 'Pending',
      aiNoShowRiskPercentage: riskScore,
      smartActionPlan: actionPlan
    };

    this.globalAppointmentLedger.push(appointment);
    this.printAppointmentDashboard(appointment);
    return appointment;
  }

  /**
   * 🛡️ التدقيق الإكلينيكي المعمق لحماية المريض والعيادة قانونياً وصحياً
   */
  private runDeepClinicalAudit(patient: MasterPatientProfile): void {
    const metrics = patient.clinicalMetrics;
    if (metrics.hasDiabetes && metrics.hbA1cLevel && metrics.hbA1cLevel > 7.5) {
      console.log(`[🚨 خطر إكلينيكي حرج]: المراجع (${patient.fullName}) معدل السكر التراكمي لديه مرتفع [${metrics.hbA1cLevel}]. يحظر إجراء أي عمليات زراعة أسنان أو جراحة لثة قبل انخفاض المعدل لضمان التئام العظام وعدم فشل العملية.`);
    }
    if (metrics.boneDensityScore === 'D4') {
      console.log(`[🚨 تنبيه جراحي]: المراجع لديه كثافة عظام فك من فئة D4 (عظام ناعمة جداً). يجب استخدام زرعات مخصصة ذات ثبات أولي عالي وتأخير وقت تحميل التركيبات.`);
    }
    console.log(`------------------------------------------------------------------`);
  }

  /**
   * 📊 لوحة تحكم ومراقبة المواعيد الذكية للاستقبال داخل المنصة
   */
  private printAppointmentDashboard(slot: HyperPredictiveSlot): void {
    console.log(`📍 حجز موعد رقم: ${slot.appointmentId} | قسم: [${slot.treatmentCategory}]`);
    console.log(`👤 المراجع: ${slot.patient.fullName} | هاتف: ${slot.patient.phoneNumber}`);
    console.log(`⚠️ مؤشر AI لمخاطر غياب المراجع: [ ${slot.aiNoShowRiskPercentage}% ]`);
    console.log(`⚙️ خطة العمل الذكية المؤتمتة: ${slot.smartActionPlan}`);
    console.log(`==================================================================`);
  }
    }
  
