import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32F fsub.s instruction. */
export class FSUBS extends RType {
  /**
   * Creates a new RISC-V RV32F fsub.s instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number) {
    super(debugInfo, 'fsub.s', 0x53, rd, 0x7, rs1, rs2, 0x4);
  }
}
